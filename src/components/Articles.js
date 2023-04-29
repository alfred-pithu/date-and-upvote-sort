import React from 'react';

function Articles({ articleArray }) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articleArray.map(info =>
                            <tr data-testid="article" key={info.upvotes}>
                                <td data-testid="article-title">{info.title}</td>
                                <td data-testid="article-upvotes">{info.upvotes}</td>
                                <td data-testid="article-date">{info.date}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
