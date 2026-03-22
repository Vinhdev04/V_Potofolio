import React, { useEffect } from 'react';

const TikTokEmbed = ({ videoId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [videoId]);

  return (
    <div className="tiktok-embed-wrapper" style={{ margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
      <blockquote 
        className="tiktok-embed" 
        cite={`https://www.tiktok.com/video/${videoId}`} 
        data-video-id={videoId} 
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a target="_blank" title="tiktok" href={`https://www.tiktok.com/video/${videoId}`}>
            Đang tải video TikTok...
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
