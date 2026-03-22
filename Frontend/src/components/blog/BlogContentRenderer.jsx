import React from 'react';
import { Typography, Tag } from 'antd';
import { 
  InfoCircleOutlined, 
  WarningOutlined, 
  CheckCircleOutlined, 
  DatabaseOutlined,
  SendOutlined,
  ClockCircleOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const BlogContentRenderer = ({ content }) => {
  if (!content || typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className="flex flex-col gap-12 w-full">
      {content.map((section, idx) => {
        switch (section.type) {
          case 'header':
            return (
              <div key={idx} className="text-center py-12 px-4 relative overflow-hidden bg-slate-50/50 rounded-3xl border border-slate-100">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-sm font-medium text-slate-600">
                    <DatabaseOutlined className="text-teal-500" />
                    {section.badge}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                    {section.title_parts.map((part, pIdx) => (
                      <span 
                        key={pIdx} 
                        className={part.gradient ? `bg-gradient-to-r ${part.gradient} bg-clip-text text-transparent` : ''}
                      >
                        {part.text}{pIdx < section.title_parts.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            );

          case 'table':
            return (
              <section key={idx} className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm rounded-3xl p-6 md:p-10 overflow-hidden">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <HistoryOutlined className="text-indigo-600" />
                  </div>
                  {section.title}
                </h2>
                <div className="overflow-x-auto pb-4">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-widest border-b border-slate-100">
                        <th className="p-5 font-bold">Đặc điểm</th>
                        {section.headers.map((h, hIdx) => (
                          <th key={hIdx} className={`p-5 font-bold ${h.color}`}>{h.text}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      {section.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
                          <td className="p-5 font-semibold text-slate-800">{row.label}</td>
                          {row.cells.map((cell, cIdx) => (
                            <td key={cIdx} className="p-5">
                              {cell.tag ? (
                                <span className={`px-3 py-1 rounded-lg text-sm font-bold ${cell.tag.style}`}>
                                  {cell.text}
                                </span>
                              ) : cell.isServer ? (
                                <div className="flex flex-col">
                                  <span className="text-orange-600 font-bold flex items-center gap-1">
                                    <SendOutlined className="text-xs" /> {cell.text}
                                  </span>
                                </div>
                              ) : cell.security ? (
                                <div className="flex flex-col gap-1">
                                  <span className="text-red-500 font-bold">{cell.text}</span>
                                  {cell.subText && <span className="text-xs text-green-600 font-medium">{cell.subText}</span>}
                                </div>
                              ) : (
                                cell.text
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );

          case 'grid':
            return (
              <div key={idx} className="w-full">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className={`h-2 w-full bg-gradient-to-r ${item.theme_gradient}`} />
                      <div className="p-8">
                        <div className={`w-14 h-14 ${item.icon_bg} rounded-2xl flex items-center justify-center mb-6`}>
                          {item.icon === 'hard-drive' && <DatabaseOutlined className={`text-2xl ${item.icon_color}`} />}
                          {item.icon === 'clock' && <ClockCircleOutlined className={`text-2xl ${item.icon_color}`} />}
                          {item.icon === 'cookie' && <CheckCircleOutlined className={`text-2xl ${item.icon_color}`} />}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">{item.description}</p>
                        
                        <div className="flex flex-col gap-4">
                          {item.blocks.map((block, bIdx) => (
                            <div key={bIdx} className={`${block.bg} p-5 rounded-2xl border ${block.border}`}>
                              <h4 className={`font-bold ${block.title_color} mb-3 flex items-center gap-2`}>
                                {block.type === 'app' && <InfoCircleOutlined />}
                                {block.type === 'warn' && <WarningOutlined />}
                                {block.type === 'security' && <SafetyCertificateOutlined />}
                                {block.type === 'feature' && <InfoCircleOutlined />}
                                {block.title}
                              </h4>
                              <ul className="space-y-2">
                                {block.list && block.list.map((li, lIdx) => (
                                  <li key={lIdx} className={`text-sm flex items-start gap-2 ${block.text_color}`}>
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                                    {li}
                                  </li>
                                ))}
                                {block.text && <p className={`text-xs ${block.text_color}`}>{block.text}</p>}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case 'closing':
            return (
              <div key={idx} className="text-center py-16 px-8 bg-slate-50 border border-dashed border-slate-300 rounded-3xl mt-12">
                <p className="text-2xl font-bold text-slate-800 italic">
                  "{section.text}" 🚀
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContentRenderer;
