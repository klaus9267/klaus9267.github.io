import React, { useEffect } from 'react';

const Comment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'klaus9267/klaus9267.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    document.getElementById('comments').appendChild(script);
  }, []);

  return <div id="comments" />;
};

export default Comment;
