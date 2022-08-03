(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        copyToClip(document.getElementById('mailSignature').innerHTML)
        alert('메일 서명이 클립보드에 복사되었습니다. 메일 서명란에 붙여넣기하세요.')
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
