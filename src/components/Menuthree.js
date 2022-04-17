import "./Menuthree.css";
export default function ContactForm(){
    return(
      
<div class="container">
  <form action="action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">E-Mail</label>
      </div>
      <div class="col-75">
        <input type="text" id="email" name="emaill" placeholder="Your email.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>
    );
}
