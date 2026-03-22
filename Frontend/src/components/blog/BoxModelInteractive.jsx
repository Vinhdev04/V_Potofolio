import React, { useRef, useEffect, useState } from 'react';
import { Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const BoxModelInteractive = () => {
  const canvasRef = useRef(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [tooltipText, setTooltipText] = useState('Di chuột vào hình để xem giải thích');

  const boxes = [
    { 
      id: 'margin', name: 'Margin', 
      width: 700, height: 500, 
      fill: 'rgba(254, 243, 199, 0.3)', stroke: '#d97706', dashed: true,
      desc: 'Margin: Không gian bên ngoài đẩy các phần tử khác ra xa.'
    },
    { 
      id: 'border', name: 'Border', 
      width: 540, height: 380, 
      fill: 'rgba(253, 230, 138, 0.4)', stroke: '#b45309', dashed: false,
      desc: 'Border: Đường viền của phần tử, có thể set độ dày và màu sắc.'
    },
    { 
      id: 'padding', name: 'Padding', 
      width: 460, height: 300, 
      fill: 'rgba(220, 252, 231, 0.5)', stroke: '#15803d', dashed: false,
      desc: 'Padding: Lớp đệm đẩy nội dung vào trong, mang theo màu background.'
    },
    { 
      id: 'content', name: 'Content', 
      width: 300, height: 160, 
      fill: 'rgba(224, 242, 254, 0.6)', stroke: '#0369a1', dashed: false,
      desc: 'Content: Vùng chứa nội dung thực sự (kích thước gốc).'
    }
  ];

  const draw = (ctx, canvas, hoveredIndex = -1) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background canvas
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Vẽ từ ngoài vào trong
    boxes.forEach((box, index) => {
      const x = centerX - box.width / 2;
      const y = centerY - box.height / 2;

      ctx.beginPath();
      ctx.setLineDash(box.dashed ? [10, 10] : []);
      
      if (hoveredIndex === index) {
        ctx.fillStyle = box.fill.replace('0.3', '0.6').replace('0.4', '0.7').replace('0.5', '0.8').replace('0.6', '0.9'); 
        ctx.strokeStyle = '#64ffda'; 
        ctx.lineWidth = 6;
      } else {
        ctx.fillStyle = box.fill;
        ctx.strokeStyle = box.stroke;
        ctx.lineWidth = 3;
        if (hoveredIndex !== -1) ctx.globalAlpha = 0.3;
      }
      
      ctx.rect(x, y, box.width, box.height);
      ctx.fill();
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // Vẽ Text Label
      ctx.fillStyle = hoveredIndex === index ? '#64ffda' : '#ccd6f6';
      ctx.font = hoveredIndex === index ? 'bold 24px Inter' : 'bold 20px Inter';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(box.name, centerX, y + 15);
    });

    // Lõi text giữa trung tâm
    ctx.fillStyle = '#ccd6f6';
    ctx.font = 'bold 22px Inter';
    ctx.textBaseline = 'middle';
    ctx.setLineDash([]);
    ctx.fillText('Hello World!', centerX, centerY - 15);
    ctx.font = '18px Inter';
    ctx.fillStyle = '#8892b0';
    ctx.fillText('(300px x 160px)', centerX, centerY + 15);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    draw(ctx, canvas, hoveredBox);
  }, [hoveredBox]);

  const handleInteraction = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (clientX - rect.left) * scaleX;
    const mouseY = (clientY - rect.top) * scaleY;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let hoveredIndex = -1;

    for (let i = boxes.length - 1; i >= 0; i--) {
      const box = boxes[i];
      const x = centerX - box.width / 2;
      const y = centerY - box.height / 2;

      if (mouseX >= x && mouseX <= x + box.width &&
          mouseY >= y && mouseY <= y + box.height) {
        hoveredIndex = i;
        break;
      }
    }
    
    setHoveredBox(hoveredIndex);
    if (hoveredIndex !== -1) {
      setTooltipText(boxes[hoveredIndex].desc);
    } else {
      setTooltipText('Di chuột vào hình để xem giải thích');
    }
  };

  const resetDraw = () => {
    setHoveredBox(-1);
    setTooltipText('Di chuột vào hình để xem giải thích');
  };

  return (
    <div className="box-model-interactive" style={{ margin: '40px 0', textAlign: 'center' }}>
      <Title level={4} style={{ color: '#ccd6f6', marginBottom: '10px' }}>Mô hình Box Model Tương Tác</Title>
      <Text style={{ color: '#8892b0', display: 'block', marginBottom: '20px' }}>
        <InfoCircleOutlined style={{ marginRight: '5px' }} />
        Di chuột (hoặc chạm) vào từng lớp trên hình để xem chi tiết
      </Text>
      
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '700px', 
        margin: '0 auto', 
        background: 'rgba(17, 34, 64, 0.5)', 
        borderRadius: '12px', 
        border: '1px solid rgba(100, 255, 218, 0.1)',
        overflow: 'hidden'
      }}>
        <canvas 
          ref={canvasRef}
          width={800} 
          height={600} 
          style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
          onMouseMove={handleInteraction}
          onMouseLeave={resetDraw}
          onTouchMove={(e) => {
            e.preventDefault();
            handleInteraction(e);
          }}
          onTouchEnd={resetDraw}
        />
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        minHeight: '40px', 
        color: '#64ffda', 
        fontSize: '1.1rem', 
        fontWeight: '500',
        transition: 'all 0.3s ease'
      }}>
        {tooltipText}
      </div>
    </div>
  );
};

export default BoxModelInteractive;
