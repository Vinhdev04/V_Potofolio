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
    <div className="flex flex-col gap-20 w-full relative">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-[-1]" 
           style={{ 
             backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)', 
             backgroundSize: '24px 24px',
             opacity: 0.6
           }} 
      />

      {content.map((section, idx) => {
        switch (section.type) {
          case 'header':
            return (
              <div key={idx} className="text-center pt-24 pb-16 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 text-sm font-semibold text-slate-600 transition-transform hover:scale-105">
                    <DatabaseOutlined className="text-teal-500 text-base" />
                    {section.badge}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-slate-900">
                    {section.title_parts.map((part, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <span className={part.gradient ? `bg-gradient-to-r ${part.gradient} bg-clip-text text-transparent` : ''}>
                          {part.text}
                        </span>
                        {pIdx < section.title_parts.length - 1 && (pIdx % 2 === 0 ? ', ' : ' & ')}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>
              </div>
            );

          case 'table':
            return (
              <section key={idx} className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 md:p-12 relative z-10">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-800">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100">
                    <HistoryOutlined className="text-indigo-600 text-xl" />
                  </div>
                  {section.title}
                </h2>
                <div className="overflow-x-auto pb-4 custom-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                      <tr className="bg-slate-50/80 text-slate-500 text-sm uppercase tracking-widest border-b-2 border-slate-100">
                        <th className="p-6 font-bold first:rounded-tl-2xl">Đặc điểm</th>
                        {section.headers.map((h, hIdx) => (
                          <th key={hIdx} className={`p-6 font-bold ${h.color}`}>{h.text}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-lg">
                      {section.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-50 hover:bg-slate-50/40 transition-all group">
                          <td className="p-6 font-semibold text-slate-800 group-hover:pl-8 transition-all">{row.label}</td>
                          {row.cells.map((cell, cIdx) => (
                            <td key={cIdx} className="p-6">
                              {cell.tag ? (
                                <span className={`px-4 py-1.5 rounded-xl text-sm font-bold shadow-sm ${cell.tag.style}`}>
                                  {cell.text}
                                </span>
                              ) : cell.isServer ? (
                                <div className="flex flex-col">
                                  <span className="text-orange-600 font-bold flex items-center gap-2">
                                    <SendOutlined className="text-base transform -rotate-45" /> {cell.text}
                                  </span>
                                </div>
                              ) : cell.security ? (
                                <div className="flex flex-col gap-1">
                                  <span className="text-rose-500 font-bold">{cell.text}</span>
                                  {cell.subText && <span className="text-sm text-emerald-600 font-semibold">{cell.subText}</span>}
                                </div>
                              ) : (
                                <span className="text-slate-500 font-medium">{cell.text}</span>
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
              <div key={idx} className="w-full relative z-10">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 tracking-tight">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="bg-white border border-slate-200 rounded-[32px] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 group">
                      <div className={`h-2.5 w-full bg-gradient-to-r ${item.theme_gradient}`} />
                      <div className="p-10">
                        <div className={`w-16 h-16 ${item.icon_bg} rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                          {item.icon === 'hard-drive' && <DatabaseOutlined className={`text-3xl ${item.icon_color}`} />}
                          {item.icon === 'clock' && <ClockCircleOutlined className={`text-3xl ${item.icon_color}`} />}
                          {item.icon === 'cookie' && <CheckCircleOutlined className={`text-3xl ${item.icon_color}`} />}
                        </div>
                        <h3 className="text-3xl font-extrabold mb-4 text-slate-800 tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">{item.description}</p>
                        
                        <div className="flex flex-col gap-6">
                          {item.blocks.map((block, bIdx) => (
                            <div key={bIdx} className={`${block.bg} p-6 rounded-[24px] border ${block.border} shadow-sm`}>
                              <h4 className={`font-bold ${block.title_color} mb-4 flex items-center gap-2.5 text-base uppercase tracking-wider`}>
                                {block.type === 'app' && <InfoCircleOutlined className="text-lg" />}
                                {block.type === 'warn' && <WarningOutlined className="text-lg" />}
                                {block.type === 'security' && <SafetyCertificateOutlined className="text-lg" />}
                                {block.type === 'feature' && <InfoCircleOutlined className="text-lg" />}
                                {block.title}
                              </h4>
                              <ul className="space-y-3">
                                {block.list && block.list.map((li, lIdx) => (
                                  <li key={lIdx} className={`text-base flex items-start gap-3 ${block.text_color} font-medium`}>
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
                                    {li}
                                  </li>
                                ))}
                                {block.text && <p className={`text-sm ${block.text_color} font-medium leading-relaxed`}>{block.text}</p>}
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
