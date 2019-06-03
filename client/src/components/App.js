import React, { Component } from 'react';

class App extends Component {
    state = { stories: [] };

    componentDidMount() {
        fetch(`${document.location.origin}/topstories`)
        .then(response => response.json())
        .then(json => this.setState({ stories: json }))
        .catch(error => alert(error.message));
    }

   render() {
        return (
            <div>
                <h2>Latest Hacker News</h2>
                <div>
                    { 
                        this.state.stories.map(story => {
                            const { id, title, by, score, url, time } = story;

                            return (
                                <div key={id}>
                                    <a href={url}><h3>{title}</h3></a>
                                    <p>Upvotes: {score}</p>
                                    <p>{by} - {new Date(time).toLocaleString()}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
