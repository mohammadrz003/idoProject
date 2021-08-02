import React, {Component} from 'react'

import ParticleEffectButton from 'react-particle-effect-button'

class ButtonEffect extends Component {
    state = {
        hidden: false
    }

    render() {
        return (
            <ParticleEffectButton
                color='#DB483B'
                hidden={this.state.hidden}
            >
                BUTTON CONTENT GOES HERE
            </ParticleEffectButton>
        )
    }
}

export default ButtonEffect;