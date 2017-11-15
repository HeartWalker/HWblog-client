import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import styles from'./home.scss';
export default function Content({value}) {
    return (
        <div className="mtb15 bgf" >
            <div className={styles.title + ' clearfix'} >{value.title}
                <span className={styles.date + ' fr'}>{value.date}</span>
            </div>
            <ReactMarkdown source={value.content || ''} />
        </div>
    )
}