import React from 'react';
import { Typography, Button, Row, Col, Tag, Card, message, Timeline } from 'antd';
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import avatarImg from '@/assets/images/avt.png';
import { experiences, education, skills, additionalInfo } from '@data/aboutData';
import { contactInfo, socialLinks } from '@/data/socialData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import '@/assets/css/About.scss';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const quote = quotesData[1];
  const githubUrl = socialLinks.find((s) => s.name === 'GitHub')?.link;
  const linkedinUrl = socialLinks.find((s) => s.name === 'LinkedIn')?.link;

  const handleDownloadCV = () => {
    message.success('Đang mở CV...');
    setTimeout(() => {
      window.open(`${import.meta.env.BASE_URL}cv.pdf`, '_blank');
    }, 300);
  };

  return (
    <PageShell className="about-page" accent="#3b82f6" style={{ maxWidth: 1200, margin: '0 auto' }}>
      {quote && (
        <FloatingQuote
          text={quote.text}
          author={quote.author}
          color={quote.color}
          style={{ top: '100px', right: '-110px', zIndex: 10 }}
        />
      )}

      <div className="section-badge about-page__badge">Profile snapshot</div>

      <Row gutter={[32, 32]} align="top">
        <Col xs={24} lg={8}>
          <Reveal direction="left">
            <Card className="section-shell about-card about-card--sticky" styles={{ body: { padding: 0 } }}>
              <div className="about-card__inner">
                <div className="about-card__avatar">
                  <img src={avatarImg} alt="Profile" />
                </div>

                <Title level={3} className="about-card__name">
                  Phạm Công Vinh
                </Title>
                <Text className="about-card__role">Frontend Developer</Text>
                <Paragraph className="about-card__summary">
                  Sinh viên năm cuối ngành Công nghệ Phần mềm tại HUTECH, tập trung vào frontend giàu tương tác,
                  trải nghiệm mượt và giao diện có chiều sâu.
                </Paragraph>

                <div className="about-card__meta">
                  <SpaceIcon icon={<EnvironmentOutlined />} text={contactInfo.location} />
                  <SpaceIcon icon={<MailOutlined />} text={contactInfo.email} />
                  <SpaceIcon icon={<PhoneOutlined />} text={contactInfo.phone} />
                  <SpaceIcon icon={<GlobalOutlined />} text="vinhdev04.github.io" link={contactInfo.website} />
                  <SpaceIcon icon={<GithubOutlined />} text="github.com/Vinhdev04" link={githubUrl} />
                  <SpaceIcon icon={<LinkedinOutlined />} text="linkedin.com/in/..." link={linkedinUrl} />
                </div>

                <div className="about-card__actions">
                  <Button
                    type="primary"
                    block
                    icon={<DownloadOutlined />}
                    className="about-card__button about-card__button--primary"
                    onClick={handleDownloadCV}
                  >
                    Tải CV
                  </Button>
                  <Button
                    block
                    icon={<span className="about-card__button-icon">🎵</span>}
                    className="about-card__button about-card__button--ghost"
                    href="https://www.tiktok.com/@devcraftt"
                    target="_blank"
                  >
                    TikTok
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </Col>

        <Col xs={24} lg={16}>
          <Reveal direction="right">
            <Card className="section-shell about-main-card" styles={{ body: { padding: 0 } }}>
              <div className="about-main-card__content">
                <Title level={2} className="about-section__title about-section__title--main">
                  Mục Tiêu Nghề Nghiệp
                </Title>
                <Paragraph className="about-section__paragraph">
                  Tôi hướng đến việc xây dựng sản phẩm web có giao diện chỉn chu, hiệu năng tốt và chuyển động đủ
                  tinh tế để nâng cảm giác sử dụng.
                </Paragraph>
                <Paragraph className="about-section__paragraph">
                  Mục tiêu dài hạn là phát triển thành Fullstack Developer, đồng thời tích hợp tư duy UI, motion và
                  AI vào các sản phẩm thực tế.
                </Paragraph>

                <div className="about-section">
                  <Title level={3} className="about-section__title">
                    <span>01.</span> Dự Án Trong Quá Trình Học Tập
                  </Title>
                  <RevealGroup>
                    <Timeline
                      items={experiences.map((exp) => ({
                        color: '#3b82f6',
                        children: (
                          <div className="about-timeline__item">
                            <Title level={4} className="about-timeline__role">
                              {exp.role}
                            </Title>
                            {exp.link ? (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-timeline__company-link"
                              >
                                <Text className="about-timeline__company" underline>
                                  @{exp.company}
                                </Text>
                              </a>
                            ) : (
                              <Text className="about-timeline__company">@{exp.company}</Text>
                            )}
                            <div className="about-timeline__period">
                              <CalendarOutlined /> {exp.period}
                            </div>
                            <ul className="about-timeline__list">
                              {exp.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                              ))}
                            </ul>
                          </div>
                        ),
                      }))}
                    />
                  </RevealGroup>
                </div>

                <div className="about-section">
                  <Title level={3} className="about-section__title">
                    <span>02.</span> Học Vấn
                  </Title>
                  {education.map((edu, index) => (
                    <Reveal key={index}>
                      <div className="about-education__item">
                        <Title level={4} className="about-education__school">
                          {edu.school}
                        </Title>
                        <Text className="about-education__degree">{edu.degree}</Text>
                        <div className="about-education__meta">{edu.year}</div>
                        <div className="about-education__meta">{edu.description}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="about-section">
                  <Title level={3} className="about-section__title">
                    <span>03.</span> Kỹ Năng Chuyên Môn
                  </Title>
                  <Row gutter={[20, 20]}>
                    {Object.entries(skills).map(([category, items], index) => (
                      <Col xs={24} sm={12} key={index}>
                        <RevealItem>
                          <div className="about-skill-group">
                            <Text strong className="about-skill-group__title">
                              {category}
                            </Text>
                            <div className="about-skill-group__tags">
                              {items.map((skill) => (
                                <Tag key={skill} className="about-skill-group__tag">
                                  {skill}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        </RevealItem>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="about-section">
                  <Title level={3} className="about-section__title">
                    <span>04.</span> {additionalInfo.title}
                  </Title>
                  <Paragraph className="about-section__paragraph">{additionalInfo.content}</Paragraph>
                </div>
              </div>
            </Card>
          </Reveal>
        </Col>
      </Row>
    </PageShell>
  );
};

const SpaceIcon = ({ icon, text, link }) => (
  <div className="about-meta__item">
    <span className="about-meta__icon">{icon}</span>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="about-meta__link">
        <Text className="about-meta__text" underline>
          {text}
        </Text>
      </a>
    ) : (
      <Text className="about-meta__text">{text}</Text>
    )}
  </div>
);

export default About;
