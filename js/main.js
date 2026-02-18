
<script>
  // Функции валидации
  function validateName(name) {
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s]+$/.test(trimmedName)) {
      return 'Имя может содержать только буквы и пробелы';
    }
    return '';
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Введите корректный email адрес';
    }
    return '';
  }

  function validateSelect(value) {
    if (!value || value === '') {
      return 'Выберите один из вариантов';
    }
    return '';
  }

  // Показ/скрытие ошибок
  function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
  }

  function clearError(element) {
    element.textContent = '';
    element.classList.remove('show');
  }

  // Валидация в реальном времени
  nameInput.addEventListener('blur', function() {
    const error = validateName(this.value);
    if (error) {
      showError(nameError, error);
    } else {
      clearError(nameError);
    }
  });

  emailInput.addEventListener('blur', function() {
    const error = validateEmail(this.value);
    if (error) {
      showError(emailError, error);
    } else {
      clearError(emailError);
    }
  });

  selectInput.addEventListener('change', function() {
    const error = validateSelect(this.value);
    if (error) {
      showError(selectError, error);
    } else {
      clearError(selectError);
    }
  });

  // Обработка отправки формы
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Сброс предыдущих состояний
    clearError(nameError);
    clearError(emailError);
    clearError(selectError);
    successMessage.style.display = 'none';
    submitBtn.classList.remove('success', 'sending');
    submitBtn.disabled = false;

    // Полная валидация
    const nameErrorMsg = validateName(nameInput.value);
    const emailErrorMsg = validateEmail(emailInput.value);
    const selectErrorMsg = validateSelect(selectInput.value);

    let isValid = true;

    if (nameErrorMsg) {
      showError(nameError, nameErrorMsg);
      isValid = false;
    }

    if (emailErrorMsg) {
      showError(emailError, emailErrorMsg);
      isValid = false;
    }

    if (selectErrorMsg) {
      showError(selectError, selectErrorMsg);
      isValid = false;
    }

    if (isValid) {
      // Имитация отправки
      submitBtn.disabled = true;
      submitBtn.classList.add('sending');

      setTimeout(() => {
        submitBtn.classList.remove('sending');
        submitBtn.classList.add('success');
        successMessage.style.display = 'block';
        
        // Очистка формы через 2 секунды
        setTimeout(() => {
          form.reset();
          submitBtn.classList.remove('success');
          submitBtn.disabled = false;
          submitBtn.querySelector('.success-text').style.display = 'none';
          submitBtn.querySelector('.btn-text').style.opacity = '1';
          successMessage.style.display = 'none';
        }, 2000);
      }, 1000);
    }
  });
});
</script>