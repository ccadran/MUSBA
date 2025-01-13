

export class Modal {
    constructor( title, content, className = '') {
      this.className = className;
      this.title = title;
      this.content = content;
  

      this.modal = document.createElement('div');
      this.modal.className = `modal ${this.className}`;
  

      this.titleElement = document.createElement('h3');
      this.titleElement.className = 'h3-title-serif';
      this.titleElement.textContent = this.title;
  

      this.contentElement = document.createElement('p');
      this.contentElement.textContent = this.content;

      this.line = document.createElement('div')
      this.line.className = 'line'

  
      this.modal.appendChild(this.titleElement);
      this.modal.appendChild(this.line);
      this.modal.appendChild(this.contentElement);

      document.body.appendChild(this.modal);
    }


    show() {
        this.modal.style.display = 'flex';
    }


    close() {
        this.modal.style.display = 'none';
    }

    remove() {
        this.modal.remove();
    }

    changeContent(title, content) {
        this.titleElement.textContent = title;
        this.contentElement.textContent = content;
    }
  }
