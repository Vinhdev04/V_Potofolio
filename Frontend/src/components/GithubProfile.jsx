import React from 'react';
import { Card, Avatar, Typography, Row, Col, Button, Tag, Space } from 'antd';
import { GithubOutlined, EnvironmentOutlined, LinkOutlined, MailOutlined, TeamOutlined, BookOutlined, StarOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avt.png';

const { Title, Text, Paragraph } = Typography;

const GithubProfile = () => {
  // Mock data based on user info
  const user = {
    name: "Phạm Công Vinh",
    username: "Vinhdev04",
    bio: "\"Write Once, Run Anywhere\" 💻 Building functional and scalable web applications with [React/Node.js].",
    followers: 5,
    following: 3,
    location: "HCM, VietNam",
    email: "PCV.FED@GMAIL.COM",
    website: "https://www.facebook.com/i.padygamy1210",
    repos: 25,
    contributions: 1369,
    streak: 4
  };

  const pinnedRepos = [
    { name: "V_Potofolio", desc: "My personal portfolio built with React & Node.js", lang: "JavaScript", stars: 12, forks: 2 },
    { name: "JobFinder Hubs", desc: "Job finding platform using MERN Stack", lang: "TypeScript", stars: 8, forks: 1 },
    { name: "V_Real_Estate", desc: "Real estate platform", lang: "JavaScript", stars: 5, forks: 0 },
    { name: "myCV", desc: "Simple CV template", lang: "HTML/CSS", stars: 3, forks: 0 }
  ];

  // Mock contribution graph
  const renderContributionGraph = () => {
    return (
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', maxWidth: '100%', overflowX: 'auto' }}>
        {Array.from({ length: 150 }).map((_, i) => (
          <div 
            key={i} 
            style={{ 
              width: 10, 
              height: 10, 
              borderRadius: 2, 
              background: Math.random() > 0.7 ? '#39d353' : Math.random() > 0.5 ? '#26a641' : Math.random() > 0.3 ? '#0e4429' : '#161b22' 
            }} 
          />
        ))}
      </div>
    );
  };

  return (
    <Card 
      style={{ 
        background: '#0d1117', 
        borderColor: '#30363d', 
        color: '#c9d1d9',
        overflow: 'hidden'
      }}
      bodyStyle={{ padding: 24 }}
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8} lg={6}>
          <div style={{ textAlign: 'center', md: { textAlign: 'left' } }}>
            <Avatar 
              size={260} 
              src={avatarImg} 
              icon={<GithubOutlined />}
              style={{ border: '1px solid #30363d', marginBottom: 16 }}
            />
            <Title level={3} style={{ color: '#c9d1d9', marginBottom: 0 }}>{user.name}</Title>
            <Text style={{ color: '#8b949e', fontSize: 20, display: 'block', marginBottom: 16 }}>{user.username}</Text>
            
            <Paragraph style={{ color: '#c9d1d9', fontSize: 16 }}>
              {user.bio}
            </Paragraph>

            <Button block style={{ background: '#21262d', color: '#c9d1d9', borderColor: '#30363d', marginBottom: 16 }}>
              Edit profile
            </Button>

            <Space direction="vertical" style={{ width: '100%', color: '#8b949e' }}>
              <Space>
                <TeamOutlined />
                <Text style={{ color: '#c9d1d9', fontWeight: 'bold' }}>{user.followers}</Text> followers · 
                <Text style={{ color: '#c9d1d9', fontWeight: 'bold' }}>{user.following}</Text> following
              </Space>
              <Space><EnvironmentOutlined /> {user.location}</Space>
              <Space><MailOutlined /> {user.email}</Space>
              <Space><LinkOutlined /> <a href={user.website} target="_blank" rel="noreferrer" style={{ color: '#58a6ff' }}>Facebook</a></Space>
            </Space>
          </div>
        </Col>

        <Col xs={24} md={16} lg={18}>
          <div style={{ marginBottom: 24 }}>
             <Title level={5} style={{ color: '#c9d1d9', marginBottom: 16 }}>Pinned</Title>
             <Row gutter={[16, 16]}>
               {pinnedRepos.map((repo, idx) => (
                 <Col xs={24} lg={12} key={idx}>
                   <Card 
                    size="small"
                    style={{ background: '#0d1117', borderColor: '#30363d', height: '100%' }}
                    bodyStyle={{ padding: 16 }}
                   >
                     <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                       <BookOutlined style={{ color: '#8b949e', marginRight: 8 }} />
                       <Text strong style={{ color: '#58a6ff' }}>{repo.name}</Text>
                       <Tag style={{ marginLeft: 'auto', background: 'transparent', color: '#8b949e', border: '1px solid #30363d', borderRadius: 10 }}>Public</Tag>
                     </div>
                     <Paragraph style={{ color: '#8b949e', marginBottom: 16, minHeight: 44 }}>{repo.desc}</Paragraph>
                     <Space style={{ color: '#8b949e', fontSize: 12 }}>
                        <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: repo.lang === 'TypeScript' ? '#3178c6' : '#f1e05a', marginRight: 4 }}></span>{repo.lang}</span>
                        <span><StarOutlined /> {repo.stars}</span>
                        <span><GithubOutlined /> {repo.forks}</span>
                     </Space>
                   </Card>
                 </Col>
               ))}
             </Row>
          </div>

          <div>
             <Title level={5} style={{ color: '#c9d1d9', marginBottom: 8 }}>{user.contributions} contributions in the last year</Title>
             <Card style={{ background: '#0d1117', borderColor: '#30363d' }}>
                {renderContributionGraph()}
                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', color: '#8b949e', fontSize: 12 }}>
                   <span>Learn how we count contributions</span>
                   <span>Less <span style={{display:'inline-block', width:10, height:10, background:'#161b22'}}></span> <span style={{display:'inline-block', width:10, height:10, background:'#0e4429'}}></span> <span style={{display:'inline-block', width:10, height:10, background:'#26a641'}}></span> <span style={{display:'inline-block', width:10, height:10, background:'#39d353'}}></span> More</span>
                </div>
             </Card>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default GithubProfile;
