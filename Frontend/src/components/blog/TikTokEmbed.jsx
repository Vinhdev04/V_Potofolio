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
    <div className="tiktok-embed-wrapper" style={{ margin: '40px 0', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        border: '1px solid rgba(100, 255, 218, 0.1)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
      }}>
        <blockquote 
          className="tiktok-embed" 
          cite={`https://www.tiktok.com/video/${videoId}`} 
          data-video-id={videoId} 
          style={{ width: '100%', margin: 0 }}
        >
          <section>
            <a target="_blank" title="tiktok" href={`https://www.tiktok.com/video/${videoId}`}>
              Đang tải video TikTok...
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
};

export default TikTokEmbed;
