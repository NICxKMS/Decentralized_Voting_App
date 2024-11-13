<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Decentralized Voting App</h1>
    <p>A blockchain-based electronic voting system built with Ethereum smart contracts and Next.js.</p>
    <h2>Badges</h2>
    <p>
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
        <img src="https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen.svg" alt="Node.js Version">
        <img src="https://img.shields.io/badge/Solidity-%5E0.8.19-lightgrey" alt="Solidity Version">
    </p>
    <h2>Features</h2>
    <ul>
        <li>Secure and transparent voting using blockchain technology</li>
        <li>User registration and authentication</li>
        <li>Administrative panel to manage elections and candidates</li>
        <li>Real-time vote counting and results display</li>
        <li>Mobile-friendly responsive UI built with Chakra UI</li>
    </ul>
    <h2>Technology Stack</h2>
    <h3>Blockchain</h3>
    <details>
        <summary>Click to view</summary>
        <ul>
            <li>Ethereum Smart Contracts (Solidity)</li>
            <li>Hardhat - Development environment</li>
        </ul>
    </details>
    <h3>Frontend</h3>
    <details>
        <summary>Click to view</summary>
        <ul>
            <li>Next.js - React framework</li>
            <li>Chakra UI - Component library</li>
        </ul>
    </details>
    <h3>Web3</h3>
    <details>
        <summary>Click to view</summary>
        <ul>
            <li>ethers.js - Ethereum web client library</li>
        </ul>
    </details>
    <h2>Local Development Setup</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/NICxKMS/Decentralized_Voting_App.git
cd Decentralized_Voting_App</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start local Hardhat node:</strong>
            <pre><code>npx hardhat node</code></pre>
        </li>
        <li><strong>Deploy the contract:</strong>
            <pre><code>npx hardhat run scripts/deploy.js --network localhost</code></pre>
        </li>
        <li><strong>Configure environment variables:</strong>
            <pre><code>NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address</code></pre>
        </li>
        <li><strong>Start development server:</strong>
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>
    <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view the application.</p>
    <h2>Testing</h2>
    <p>Run the test suite:</p>
    <pre><code>npx hardhat test</code></pre>
    <p>With gas reporting:</p>
    <pre><code>REPORT_GAS=true npx hardhat test</code></pre>
    <h2>Project Structure</h2>
    <pre><code>
Decentralized_Voting_App/
├── contracts/           # Smart contract source code
├── src/
│   ├── artifacts/      # Contract ABIs and deployment info
│   ├── components/     # React components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Next.js pages and API routes
│   └── utils/          # Helper utilities
├── test/               # Contract test files
└── hardhat.config.js   # Hardhat configuration
</code></pre>
    <h2>Interactive Demo</h2>
    <p>Check out our interactive demo! Click the button below to explore:</p>
    <button onclick="window.location.href='http://localhost:3000'">Launch Demo</button>
    <h2>Contributing</h2>
    <p>Pull requests are welcome! Please read our <a href="CONTRIBUTING.md">contributing guidelines</a> first.</p>
    <h2>License</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
    <h2>Credits</h2>
    <p>Designed and Developed by <a href="https://github.com/NICxKMS">Nikhil</a></p>
    <p>View project on <a href="https://github.com/NICxKMS/Decentralized_Voting_App">GitHub</a>.</p>
    <h2>API Endpoints</h2>
    <p>Here are some of the key API endpoints for interacting with the Decentralized Voting App:</p>
    <table border="1">
        <thead>
            <tr>
                <th>Endpoint</th>
                <th>Description</th>
                <th>Method</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>/api/votes</td>
                <td>Submit a vote</td>
                <td>POST</td>
            </tr>
            <tr>
                <td>/api/results</td>
                <td>Get current vote results</td>
                <td>GET</td>
            </tr>
            <tr>
                <td>/api/register</td>
                <td>Register a new user</td>
                <td>POST</td>
            </tr>
        </tbody>
    </table>
    <h2>Tips & Tricks</h2>
    <p>Hover over the sections below for additional tips:</p>
    <ul>
        <li title="Be sure to check if the Hardhat node is running before deploying!">Deploying Smart Contracts</li>
        <li title="You can use Chakra UI's built-in theming features to customize your app's UI.">Using Chakra UI</li>
    </ul>
    <h2>FAQ</h2>
    <details>
        <summary>What is Ethereum Smart Contract?</summary>
        <p>Ethereum Smart Contracts are self-executing contracts with the terms of the agreement directly written into code. It runs on the Ethereum blockchain and ensures secure, transparent transactions.</p>
    </details>
    <details>
        <summary>How do I configure the environment variables?</summary>
        <p>To configure the environment variables, create a .env file in the root directory of the project and add your contract address like so: <code>NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address</code></p>
    </details>
</body>
</html>
