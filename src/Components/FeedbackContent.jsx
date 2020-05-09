import React from 'react';
import './styles/feedback.scss'

function FeedbackContent() {
  return <section class='wrapper flex-row'>
  <div class='flex-column'>
    {/* <div class='content'>
      <h4>Feedback Summary</h4> */}
      {/* <h6>Personal Skills and competences</h6> */}
    {/* </div> */}
    <div>
      <dl>
      <dt>
      Personal Skills and competences
      </dt>
      <dd class="percentage percentage-11"><span class="text">Communication</span></dd>
      <dd class="percentage percentage-49"><span class="text">Skill2</span></dd>
      <dd class="percentage percentage-16"><span class="text">Skill3</span></dd>
      <dd class="percentage percentage-5"><span class="text">Skill4</span></dd>
      <dd class="percentage percentage-2"><span class="text">Skill5</span></dd>
      <dd class="percentage percentage-2"><span class="text">Skill6</span></dd>
    </dl>
  </div>
</div>


</section>

}

export default FeedbackContent;