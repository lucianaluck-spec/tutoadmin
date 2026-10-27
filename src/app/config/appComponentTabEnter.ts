export class AppComponentTabEnter {
  focusNext(event: any) {
    event.preventDefault(); // Impede o "Enter" de submeter o form
    event.stopPropagation();
    console.log(event.target);
    console.log(event.target.nextElementSibling);
    if (event.target.parentElement.nextElementSibling) {
      console.log("pai :", event.target.parentElement.nextElementSibling);
      const nextInput = event.target.parentElement.nextElementSibling.querySelector('input', 'select', 'textarea');
      console.log("nextInput ", nextInput);
      if (nextInput) {
        nextInput.focus();

      }
    } else {
      if (event.target.nextElementSibling) {
        const nextInput = event.target.nextElementSibling.querySelector('input', 'select', 'textarea');
        if (nextInput) {
          console.log("nextInput ", nextInput);
          nextInput.focus();

        }
      }
    }
  }

  focusNextDropDown(event: any) {
    event.preventDefault(); // Impede o submit do formulário
    const target = event.target;
    const elements = Array.from(document.querySelectorAll('input, select, button, textarea'));
    const index = elements.indexOf(target);

    if (index > -1 && index < elements.length - 1) {
      (elements[index] as HTMLElement).focus();
    }
  }

  focusNextByID(event: any, id: string) {
    event.preventDefault(); // Impede o submit do formulário
    console.log(" ID ", id);
    const element = document.getElementById(id);

    if (element) {
     
      console.log("foca nele");
      console.log(element);
      (element as HTMLSelectElement).focus();
    }
  }

}
