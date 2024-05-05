document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    
    // You can process the data here, for example, send it to a server
    
    // Display a message (for demonstration)
    alert("Data submitted!\nName: " + name + "\nContact: " + contact + "\nEmail: " + email + "\nAddress: " + address);
  });
  