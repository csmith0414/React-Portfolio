const Contact = () => {
    return (
        <div>
            <form class="form-style-4" action="" method="post">
                <label for="field1">
                    <span>Enter Your Name</span><input type="text" name="field1" required="true" />
                </label>
                <label for="field2">
                    <span>Email Address</span><input type="email" name="field2" required="true" />
                </label>
                <label for="field3">
                    <span>Phone Number</span><input type="text" name="field3" required="true" />
                </label>
                <label for="field4">
                    <span>Short Message</span><textarea name="field4" onkeyup="adjust_textarea(this)" required="true"></textarea>
                </label>
                <label>
                    <span> </span><input type="submit" value="Send" />
                </label>
            </form>
        </div>
    );
};

export default Contact;