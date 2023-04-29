import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {

    const [articleArray, setArticleArray] = useState(articles);



    // Function for sorting articles on Upvote basis
    const upvoteSort = () => {
        const upvoteArray = articles.map(a => a.upvotes);
        const sortedUpvoteArray = upvoteArray.sort(function (a, b) { return (b - a) });

        let finalArr = [];

        for (let u of sortedUpvoteArray) {
            for (let a of articles) {
                if (a.upvotes === u) {
                    finalArr.push(a);
                }
            }
        }

        setArticleArray(finalArr);

    }

    // Function for sorting articles on Date basis
    const dateSort = () => {
        const dateArrayStrFormat = articles.map(a => a.date)
        const dateArrayDateFormat = dateArrayStrFormat.map(date => new Date(date));

        const sortedDateArray = dateArrayDateFormat.sort(function (a, b) {
            return b - a;
        });


        let sortedArray = [];
        for (let d of sortedDateArray) {
            for (let a of articles) {
                const formatted = new Date(a.date)
                if (formatted.getTime() === d.getTime()) {
                    sortedArray.push(a);
                }

            }
        }
        setArticleArray(sortedArray);
    }


    return (
        <div className="App">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => upvoteSort()} className="small">Most Upvoted</button>
                <button onClick={() => dateSort()} className="small">Most Recent</button>
            </div>
            <Articles articleArray={articleArray} />
        </div>
    );

}

export default App;
