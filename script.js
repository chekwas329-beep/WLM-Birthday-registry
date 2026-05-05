* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background: #000;
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px 40px 20px; 
    overflow-x: hidden;
}

.background-glow {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 112, 243, 0.4) 0%, transparent 70%);
    filter: blur(80px);
    z-index: -1;
}

#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
}

.container {
    width: 100%;
    max-width: 400px;
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 30px 25px;
    width: 100%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    text-align: center;
}

.logo-container {
    margin-top: -75px; 
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.church-logo-circle {
    width: 90px;
    height: 90px;
    background: #000;
    border: 2px solid #0070f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 112, 243, 0.6);
    overflow: hidden;
}

.main-logo {
    width: 115%; /* Large and bold */
    height: auto;
    object-fit: contain;
}

.main-title {
    font-weight: 900;
    font-size: 1.4rem;
    letter-spacing: 2px;
}

.sub-title {
    font-size: 0.8rem;
    color: #0070f3;
    letter-spacing: 3px;
    margin-bottom: 30px;
    font-weight: 700;
}

.form-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
}

.input-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.label {
    font-size: 0.65rem;
    font-weight: 700;
    color: #0070f3;
    letter-spacing: 1px;
}

input, select {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 14px;
    color: #fff;
    outline: none;
}

.birthday-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;
}

.premium-button {
    background: #0070f3;
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 16px;
    font-weight: 700;
    margin-top: 10px;
    cursor: pointer;
}

.feedback-msg {
    font-size: 0.75rem;
    margin-top: 5px;
    height: 15px;
    text-align: center;
}

.designer-credit {
    margin-top: 40px; /* Space from the button */
    font-size: 0.6rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.3);
}

.portfolio-link {
    color: #0070f3;
    text-decoration: none;
    font-weight: 700;
}
