import { signIn } from './firebase'
import {cardclass, buttonclass, buttonclass2} from './temp.js'
import { Component, createRef } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.inputEmail = createRef()
        this.inputPassword = createRef()
    }

    render() {
        return (
            <main>
                <form style={cardclass}>
                    <div style={{ fontSize: '1.2rem', textAlign: 'center', fontStyle: 'normal', fontWeight: 'normal', letterSpacing: '0.1em' }}>
                        <p>LOGIN</p>
                    </div>
                    <input type="email" ref={(email) => this.inputEmail = email} placeholder="EMAIL" style={{ width: '100%', padding: '0.5rem 1.5rem', margin: '1rem 0rem', backgroundColor: 'rgb(241, 241, 241)', borderRadius: '0.5rem', border: 'medium none', letterSpacing: '0.1em', fontSize: '0.9rem', textAlign: 'left', backgroundImage: 'url(&quot,data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC&quot,)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto', }} autocomplete="off" />
                    <input type="password" ref={(password) => this.inputPassword = password} placeholder="SENHA" style={{ width: '100%', padding: '0.5rem 1.5rem', margin: '1rem 0rem', backgroundColor: 'rgb(241, 241, 241)', borderRadius: '0.5rem', border: 'medium none', letterSpacing: '0.1em', fontSize: '0.9rem', textAlign: 'left', backgroundImage: 'url(&quot,data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC&quot,)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto', }} autocomplete="off" />
                    <a style={buttonclass} type="button" onClick={
                        () => signIn(this.inputEmail.value, this.inputPassword.value)
                    }>ENTRAR</a>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                        <a style={buttonclass2} class="buttonText">
                            <a style={{ color: '#fff', textDecoration: 'none' }} href="/usuariorecuperarsenha">RECUPERAR SENHA</a>
                        </a>
                        <a style={buttonclass2} class="buttonText">
                            <a style={{ color: '#fff', textDecoration: 'none' }} href="/">CADASTRAR</a>
                        </a>
                    </div>
                </form>
            </main>
        );
    }
}