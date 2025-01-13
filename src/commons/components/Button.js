export class Button {
    constructor(text, link, size, color, className = '') {
        this.text = text;
        this.link = link;
        this.color = color;
        this.className = className;
        
        const validSizes = ['big', 'normal', 'small'];
        const validColor = ['black', 'white']
        
        if (!validSizes.includes(size) && !validColor.includes(color)) {
            console.warn(`Invalid size: "${size}" or color ${color}. Defaulting to "normal".`);
            this.size = 'normal'; 
            this.color = 'black'
        } else {
            this.size = size;
            this.color = color
        }

        this.button = document.createElement('a');
        this.button.className = `button ${this.size} ${this.color} ${this.className}`;
        this.button.href = this.link;
        this.btnText = document.createElement('span')
        this.button.textContent = this.text;
        this.button.href = this.link;
        this.button.appendChild(this.btnText);
        document.body.appendChild(this.button);
    }
}
