// Tambahkan kode JavaScript kalian di file ini
const handleGetFormData = () => {
    const name = document.getElementById('name').value 
    const email = document.getElementById('email').value
    const city = document.getElementById('city').value
    const zipCode = document.getElementById('zip-code').value
    const status = document.getElementById('status').checked 
  
    const data = {
      name,
      email,
      city,
      zipCode,
      status
    }
  
    return data
  }
  
  const isNumber = (x) => {
      if (isNaN(x)) {
        return false
      } else {
        return true
      }
    }
  
  const checkboxIsChecked = () => {
    const status = document.getElementById('status')
    if (status.checked) {
      return true
    } else {
      return false
    }
  }
  
  const validateFormData = (formData) => {
    if(formData.name.lenght !== 0 && formData.email.lenght !== 0 && formData.city.lenght !== 0 && formData.zipCode.lenght !== 0 && checkboxIsChecked()) {
      return true
    } else {
      return false
    }
  }
  
  const submit = () => {
    if (!validateFormData(handleGetFormData())){
      document.getElementById("warning").innerText = "Periksa form anda sekali lagi"
    } else if (validateFormData(handleGetFormData())) {
      document.getElementById("warning").innerText = ""
    }
  }
  
  document.getElementById("form")[0].addEventListener("submit", submit)