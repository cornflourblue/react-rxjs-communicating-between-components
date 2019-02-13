import React from 'react';

import { messageService } from '@/_services';

class HomePage extends React.Component {
    sendMessage() {
        // send message to subscribers via observable subject
        messageService.sendMessage('Message from Home Page Component to App Component!');
    }

    clearMessages() {
        // clear messages
        messageService.clearMessages();
    }

    render() {
        return (
            <div>
                <h2>React + RxJS Component Communication</h2>
                <button onClick={this.sendMessage} className="btn btn-primary">Send Message</button>
                <button onClick={this.clearMessages} className="btn btn-secondary">Clear Messages</button>                
            </div>
        );
    }
}

export { HomePage };