<?php
$field_name = $_POST['cf_name'];
$field_company = $_POST['cf_company'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'danhart21390@gmail.com';
$subject = 'DHWD - '.$field_name.', '.$field_company;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'Company: '.$field_company."\n";
$body_message .= 'E-mail: '.$field_email."\n\n";
$body_message .= $field_message;

$headers = 'From: '.$field_name."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you, your message was successfully submitted.');
		window.location = 'http://thehartattack.com/dhwd';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please send an e-mail to danhart21390@gmail.com.');
		window.location = 'http://thehartattack.com/dhwd';
	</script>
<?php
}
?>
