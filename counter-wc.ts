import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('counter-wc')
export class CounterWC extends LitElement {
  @property()
  count

  constructor() {
    super()
    this.count = 0
  }

  static override styles = css`
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
    
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    
    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    
    .card {
      padding: 2em;
    }
  `

  handleIncrement() {
    console.log('click +')
    this.count++
  }

  handleDecrement() {
    console.log('click -')
    this.count--
  }

  override render() {
    return html`
    <div class="root-container">
      <h1>Counter</h1>
      <div class="card">
        <button @click=${this.handleIncrement} id="increase">+</button>
        <button @click=${this.handleDecrement} id="decrease">-</button>
        <div id="count">
          ${this.count}
        </div>
      </div>
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "counter-wc": CounterWC;
  }
}
