const sendData = async (formData) => {
  const url = 'http://test.local/email.php';

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.text();
      console.log(data); // Output success or failure message
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  sendData(formData); // Call the sendData function to send the data
});
