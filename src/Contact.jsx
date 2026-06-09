export default function Contact() {
return (
<div>
<h1>Contact</h1>
{/*Phone Number: */}
<p>Phone: +1 (647) 581-5803</p>
{/*Email: */}
<br /><p>Email:<a href="mailto:douglasajani2@gmail.com"><b />douglasajani2@gmail.com</a></p>
{/*Form: */}
        <form action="mailto:douglasajani2@gmail.com" method="post" enctype="text/plain">
            Name:<br /> {/*Name Field*/}
            <input type="text" name="name" required /><br />
            E-mail:<br /> {/*E-mail*/}
            <input type="email" name="mail" required /><br />
            Phone Number:<br /> {/*Phone Number*/}
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> <br />
            Message:<br /> {/*Message*/}
            <textarea name="Message"></textarea><br />
            <br /><input type="submit" value="Send" /> {/*Submit*/}
            <input type="reset" value="Reset" /> {/*Reset*/}
        </form>
</div>
);
}