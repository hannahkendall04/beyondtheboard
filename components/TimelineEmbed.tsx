import React from 'react';

const TimelineEmbed = () => {
  const embedCode = '<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQ00rBtALx1w0gVpYH5CHBf48-I7POtSlw-EgE4ZDDYfVEJwJ3rm1Gtk0jew7u2oMeFhWiunWRxORxn&font=Default&lang=en&initial_zoom=2&width=100%25&height=650" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no"></iframe>'; 

  return (
    <div style={{ position: 'relative', width: '100%', height: '650px' }}>
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
};

export default TimelineEmbed;
