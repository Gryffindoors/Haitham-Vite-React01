import React, { Component } from 'react';
import Card from './Card';

export default class Header extends Component {
    state = {
        users: [
            { id: 1, userName: 'Haitham Elfowaty', address: 'Cairo, Egypt', goal: 'Full Stack Developer' },
            { id: 2, userName: 'John Doe', address: 'New York, USA', goal: 'Data Scientist' },
            { id: 3, userName: 'Jane Doe', address: 'Paris, France', goal: 'Frontend Developer' },
            { id: 4, userName: 'Ahmed Ali', address: 'Cairo, Egypt', goal: 'Backend Developer' },
            { id: 5, userName: 'Mohamed Ali', address: 'Cairo, Egypt', goal: 'Full Stack Developer' },
            { id: 6, userName: 'Ali Ahmed', address: 'Cairo, Egypt', goal: 'Full Stack Developer' }
        ]
    };

    handleDelete = (id) => {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        });
    };

    render() {
        return (
            <div className='container-fluid bg-light bt-dark py-5'>
                <div className='row gy-3'>
                    {this.state.users.map(user => (
                        <Card
                            key={user.id}
                            className="col-md-4"
                            userName={user.userName}
                            address={user.address}
                            goal={user.goal}
                            edit={() => this.handleDelete(user.id)} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}
