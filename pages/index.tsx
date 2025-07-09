import { useState } from "react";

export default function HomePage() {
  const [showTask, setShowTask] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        橫濱星象調查局
      </h1>

      <div style={{ backgroundColor: '#222', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>📢 公告：第1日調查開始</h2>
        <p>請前往任務地點展開調查，記得謹慎解碼。回到觀測基地後可獲得其他調查者回報。</p>
      </div>

      <div style={{ height: '300px', backgroundColor: '#333', marginBottom: '1rem', padding: '1rem' }}>
        <p>🗺（地圖模組待整合 - 點此模擬任務觸發）</p>
        <button onClick={() => setShowTask(true)} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          前往任務
        </button>
      </div>

      {showTask && (
        <div style={{ backgroundColor: '#444', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>🧩 任務：星港遺跡暗文</h3>
          <p>解讀雕像後方刻印之意義，並嘗試輸入相應暗碼以解鎖下一步。</p>
          <input placeholder="輸入暗碼..." style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem' }} />
          <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>提交</button>
        </div>
      )}
    </div>
  );
}