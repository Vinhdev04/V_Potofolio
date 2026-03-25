import React from 'react';
import { Typography, Row, Col, Card, Tag, Table } from 'antd';
import { 
  DatabaseOutlined, 
  HistoryOutlined, 
  SwapOutlined, 
  LockOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  BulbOutlined,
  CodeOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const VarLetConst = () => {

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const tableColumns = [
    {
      title: 'Đặc điểm',
      dataIndex: 'feature',
      key: 'feature',
      render: (text) => <Text style={{ color: '#ccd6f6', fontWeight: 'bold' }}>{text}</Text>,
    },
    {
      title: <Text style={{ color: '#f97316', fontSize: '1.2rem' }}>var</Text>,
      dataIndex: 'varCol',
      key: 'varCol',
      render: (text) => <Text style={{ color: '#8892b0' }}>{text}</Text>,
    },
    {
      title: <Text style={{ color: '#3b82f6', fontSize: '1.2rem' }}>let</Text>,
      dataIndex: 'letCol',
      key: 'letCol',
      render: (text, record) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: <Text style={{ color: '#8b5cf6', fontSize: '1.2rem' }}>const</Text>,
      dataIndex: 'constCol',
      key: 'constCol',
      render: (text, record) => <Tag color="purple">{text}</Tag>,
    },
  ];

  const tableData = [
    {
      key: '1',
      feature: 'Phạm vi (Scope)',
      varCol: 'Function / Global',
      letCol: 'Block (Khối lệnh)',
      constCol: 'Block (Khối lệnh)',
    },
    {
      key: '2',
      feature: 'Gán lại giá trị',
      varCol: <><CheckCircleOutlined style={{ color: '#22c55e' }}/> Có</>,
      letCol: <><CheckCircleOutlined style={{ color: '#22c55e' }}/> Có</>,
      constCol: <><CloseCircleOutlined style={{ color: '#ef4444' }}/> Không</>,
    },
    {
      key: '3',
      feature: 'Khai báo lại',
      varCol: <><CheckCircleOutlined style={{ color: '#22c55e' }}/> Có (cùng scope)</>,
      letCol: <><CloseCircleOutlined style={{ color: '#ef4444' }}/> Không</>,
      constCol: <><CloseCircleOutlined style={{ color: '#ef4444' }}/> Không</>,
    },
    {
      key: '4',
      feature: 'Hoisting',
      varCol: 'Có (undefined)',
      letCol: 'Có (nhưng vào TDZ*)',
      constCol: 'Có (nhưng vào TDZ*)',
    },
  ];

  const codeStyle = {
    background: '#0a192f',
    padding: '16px',
    borderRadius: '8px',
    color: '#ccd6f6',
    fontFamily: '"Fira Code", monospace',
    fontSize: '0.9rem',
    border: '1px solid rgba(100, 255, 218, 0.1)',
    marginTop: '16px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', width: '100%', position: 'relative' }}>
      {/* Header */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={itemVariants} 
        style={{ textAlign: 'center', padding: '40px 20px', position: 'relative', zIndex: 10 }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="#112240" style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '30px', fontWeight: 'bold' }}>
            🔥 JavaScript Fundamentals
          </Tag>
          <Title level={1} style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', color: '#ccd6f6', lineHeight: 1.2 }}>
            Phân biệt <span style={{ color: '#f97316' }}>var</span>, <span style={{ color: '#3b82f6' }}>let</span> và <span style={{ color: '#8b5cf6' }}>const</span>
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            Hiểu rõ cách khai báo biến là bước đầu tiên để viết mã JavaScript sạch, ít lỗi và dễ bảo trì. Hãy cùng khám phá sự khác biệt cốt lõi của chúng!
          </Paragraph>
        </div>
      </motion.div>

      {/* Table */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={itemVariants} 
        style={{ background: '#112240', border: '1px solid rgba(136, 146, 176, 0.1)', borderRadius: '24px', padding: '40px', position: 'relative' }}
      >
        <Title level={2} style={{ color: '#ccd6f6', marginBottom: '30px' }}>
          <DatabaseOutlined style={{ color: '#64ffda', marginRight: '15px' }} />
          Bảng So Sánh Nhanh
        </Title>
        <Table 
          columns={tableColumns} 
          dataSource={tableData} 
          pagination={false} 
          style={{ background: 'transparent' }}
          className="dark-table-override"
        />
        <style>{`
          .dark-table-override .ant-table {
            background: transparent !important;
            color: #8892b0;
          }
          .dark-table-override .ant-table-thead > tr > th {
            background: rgba(10, 25, 47, 0.5) !important;
            color: #ccd6f6 !important;
            border-bottom: 2px solid rgba(100, 255, 218, 0.1);
          }
          .dark-table-override .ant-table-tbody > tr > td {
            border-bottom: 1px solid rgba(136, 146, 176, 0.1);
          }
          .dark-table-override .ant-table-tbody > tr:hover > td {
            background: rgba(10, 25, 47, 0.3) !important;
          }
        `}</style>
        <Paragraph style={{ color: '#8892b0', marginTop: '20px', fontSize: '0.9rem' }}>
          * <Text strong style={{ color: '#ccd6f6' }}>TDZ (Temporal Dead Zone):</Text> Vùng an toàn khiến biến không thể được truy cập trước dòng code khởi tạo nó.
        </Paragraph>
      </motion.section>

      {/* Cards */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={itemVariants}
      >
        <Row gutter={[30, 30]}>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', background: '#112240', border: '1px solid rgba(249, 115, 22, 0.2)', borderTop: '4px solid #f97316', borderRadius: '16px' }} bodyStyle={{ padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HistoryOutlined style={{ fontSize: '24px', color: '#f97316' }} />
              </div>
              <Title level={3} style={{ color: '#f97316', marginBottom: '15px' }}>var</Title>
              <Paragraph style={{ color: '#8892b0', minHeight: '80px' }}>
                Từng là cách duy nhất để khai báo biến. Nó có phạm vi hàm hoặc toàn cục, và dễ gây ra lỗi do có thể vô tình khai báo lại.
              </Paragraph>
              <Tag color="orange" style={{ marginBottom: '15px' }}>Hạn chế sử dụng</Tag>
              <pre style={codeStyle}>
                <span style={{color: '#f97316'}}>var</span> x = 10;<br/>
                <span style={{color: '#f97316'}}>var</span> x = 20; <span style={{color: '#6e7681'}}>// OK</span><br/>
                console.log(x); <span style={{color: '#6e7681'}}>// 20</span>
              </pre>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card style={{ height: '100%', background: '#112240', border: '1px solid rgba(59, 130, 246, 0.2)', borderTop: '4px solid #3b82f6', borderRadius: '16px' }} bodyStyle={{ padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <SwapOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />
              </div>
              <Title level={3} style={{ color: '#3b82f6', marginBottom: '15px' }}>let</Title>
              <Paragraph style={{ color: '#8892b0', minHeight: '80px' }}>
                Giới hạn trong phạm vi khối {"{}"} và cho phép gán lại giá trị, rất lý tưởng cho vòng lặp hoặc các biến thay đổi.
              </Paragraph>
              <Tag color="blue" style={{ marginBottom: '15px' }}>Khuyên dùng nếu biến sẽ đổi</Tag>
              <pre style={codeStyle}>
                <span style={{color: '#3b82f6'}}>let</span> y = 10;<br/>
                y = 20; <span style={{color: '#6e7681'}}>// OK</span><br/>
                <span style={{color: '#6e7681'}}>// let y = 30; // Lỗi</span>
              </pre>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card style={{ height: '100%', background: '#112240', border: '1px solid rgba(139, 92, 246, 0.2)', borderTop: '4px solid #8b5cf6', borderRadius: '16px' }} bodyStyle={{ padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <LockOutlined style={{ fontSize: '24px', color: '#8b5cf6' }} />
              </div>
              <Title level={3} style={{ color: '#8b5cf6', marginBottom: '15px' }}>const</Title>
              <Paragraph style={{ color: '#8892b0', minHeight: '80px' }}>
                Giới hạn trong phạm vi khối {"{}"}. Bắt buộc khởi tạo ngay và không thể gán lại (tuy nhiên Object/Array bên trong có thể sửa).
              </Paragraph>
              <Tag color="purple" style={{ marginBottom: '15px' }}>Mặc định nên dùng</Tag>
              <pre style={codeStyle}>
                <span style={{color: '#8b5cf6'}}>const</span> z = 10;<br/>
                <span style={{color: '#8b5cf6'}}>const</span> obj = {"{ a: 1 }"};<br/>
                obj.a = 2; <span style={{color: '#6e7681'}}>// OK</span>
              </pre>
            </Card>
          </Col>
        </Row>
      </motion.div>

      {/* Best Practices */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={itemVariants} 
        style={{ background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)', border: '1px solid rgba(100, 255, 218, 0.2)', borderRadius: '24px', padding: '50px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <BulbOutlined style={{ fontSize: '48px', color: '#ffbd2e', textShadow: '0 0 20px rgba(255, 189, 46, 0.4)' }} />
            <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Lời khuyên thực tế khi viết Code</Title>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'rgba(10, 25, 47, 0.5)', padding: '30px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <CheckCircleOutlined style={{ color: '#8b5cf6', fontSize: '20px', marginTop: '4px' }} />
              <div>
                <Text strong style={{ color: '#ccd6f6', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>1. Mặc định luôn dùng const</Text>
                <Text style={{ color: '#8892b0' }}>Giúp code an toàn, dễ đoán và báo lỗi sớm nếu bạn vô tình gán đè dữ liệu.</Text>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <CheckCircleOutlined style={{ color: '#3b82f6', fontSize: '20px', marginTop: '4px' }} />
              <div>
                <Text strong style={{ color: '#ccd6f6', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>2. Dùng let khi cần thiết</Text>
                <Text style={{ color: '#8892b0' }}>Chỉ dùng let cho các biến chắc chắn sẽ thay đổi (ví dụ: bộ đếm i trong vòng lặp for).</Text>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <CloseCircleOutlined style={{ color: '#ef4444', fontSize: '20px', marginTop: '4px' }} />
              <div>
                <Text strong style={{ color: '#ff5f56', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>3. Tuyệt đối tránh var</Text>
                <Text style={{ color: '#8892b0' }}>Không dùng var trong các dự án JS hiện đại để tránh các lỗi khó chịu về Hoisting và Scope.</Text>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default VarLetConst;
