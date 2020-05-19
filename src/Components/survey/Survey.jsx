import React, { useState, useEffect } from "react";
import data from "../../data/sample.json";
import Search from "../search/Search";
import VirtueBucketList from "../virtues/VirtueBucketList";
import VirtueListItem from "../virtues/VirtueListItem";
import styles from "./styles/survey.module.scss";
import Feedback from "./Feedback";
import LayoutStyles from "../styles/layout.module.css";
import axios from "axios";

const Survey = (props) => {
  const [employee, setEmployee] = useState();
  const [selectedVirtueBucket, setSelectedVirtueBucket] = useState();
  const [selectedVirtues, setSelectedVirtues] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const virtuesData = props.virtues;
  const virtueBucketsData = props.virtueBuckets;

  useEffect(() => {
    setSelectedVirtueBucket();
    setSelectedVirtues([]);
    setFeedback([]);
  }, [employee]);

  const selectEmployee = (id) => {
    setEmployee(id);
  };

  const selectVirtueBucket = (id) => {
    setSelectedVirtueBucket(id);
  };

  const selectVirtues = (id) => {
    const virtueById = getVirtuesById(id);
    let updatedVirtues = [...selectedVirtues];

    const existingVirtue = updatedVirtues.find((element) => element.id === id);
    if (existingVirtue) {
      alert(`You have already selected the virtue '${existingVirtue.name}'!`);
    } else {
      updatedVirtues.push(...virtueById);
      setSelectedVirtues(updatedVirtues);
    }
  };

  const getVirtuesById = (id) => {
    return virtuesData.filter((virtue) => virtue.id === id);
  };

  const getVirtuesForBucketId = (id) => {
    const virtues = virtuesData.filter(
      (virtue) => virtue.virtue_bucket_id === id
    );
    return virtues;
  };

  const handleSetFeedback = (id, rating, description) => {
    const newFeedback = {
      skillId: id,
      rating: rating,
      description: description,
    };

    let updatedFeedback = [...feedback];

    updatedFeedback = updatedFeedback.filter(
      (element) => element.skillId !== id
    );

    updatedFeedback.push(newFeedback);

    setFeedback(updatedFeedback);
  };

  const virtuesForBucket = getVirtuesForBucketId(selectedVirtueBucket);
  const virtues = virtuesForBucket.map((virtue) => {
    return (
      <VirtueListItem key={virtue.id} {...virtue} onClick={selectVirtues} />
    );
  });

  const feedbacks = selectedVirtues.map((virtue) => (
    <Feedback
      key={virtue.id}
      {...virtue}
      handleSetFeedback={handleSetFeedback}
    />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewerId = Math.floor(Math.random() * 100) + 1;
    const data = {
      reviewerId: reviewerId,
      receiverId: employee,
      createdAt: new Date(),
      feedback: feedback,
    };

    console.log(data);
    axios
      .post("/surveys", { data })
      .then((res) => {
        alert("Thank you, your feedback has been submitted!");
        setSelectedVirtueBucket();
        setSelectedVirtues([]);
        setFeedback([]);
        setEmployee();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className={styles.main}>
      <section>
        <Search className={styles.search} onClick={selectEmployee} />
      </section>
      <section className={styles.survey_bucket_container}>
        <div className={styles.virtue_categories}>
          <h6>Select a Virtue Category</h6>
          {virtueBucketsData && (
            <VirtueBucketList
              virtue_buckets={virtueBucketsData}
              onClick={selectVirtueBucket}
            />
          )}
        </div>
      </section>
      <section className={styles.dragzone_container}>
        <h6>Select Virtues</h6>
        <div className={styles.virtues_container}>{virtues}</div>
      </section>
      <section className={styles.feedback_container}>
        <h6>Give your feedback</h6>
        <form onSubmit={handleSubmit}>
          {feedbacks}
          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
};

export default Survey;
