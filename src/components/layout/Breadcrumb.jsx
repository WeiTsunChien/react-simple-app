import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">首頁</a></li>
            <li className="breadcrumb-item"><a href="#">主功能A</a></li>
            <li className="breadcrumb-item active">網頁標題</li>
        </ul>
    );
};

export default Breadcrumb;
