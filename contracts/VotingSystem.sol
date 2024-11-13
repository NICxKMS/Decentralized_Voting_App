// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract VotingSystem is Ownable {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId;
    }
    
    enum VotingState { Created, Registering, Voting, Ended }
    
    VotingState public state;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;
    uint256 public totalVotes;
    
    event VoterRegistered(address indexed voter);
    event VoteCast(address indexed voter, uint256 indexed candidateId);
    event VotingStateChanged(VotingState newState);
    event CandidateAdded(uint256 indexed candidateId, string name);
    
    constructor() Ownable(msg.sender) {
        state = VotingState.Created;
    }
    
    modifier onlyDuringState(VotingState _state) {
        require(state == _state, "Invalid state for this operation");
        _;
    }
    
    function addCandidate(string memory _name) external onlyOwner {
        uint256 candidateId = candidates.length;
        candidates.push(Candidate({
            id: candidateId,
            name: _name,
            voteCount: 0
        }));
        emit CandidateAdded(candidateId, _name);
    }
    
    function registerVoter(address _voter) external onlyOwner onlyDuringState(VotingState.Registering) {
        require(!voters[_voter].isRegistered, "Voter already registered");
        voters[_voter] = Voter({
            isRegistered: true,
            hasVoted: false,
            votedCandidateId: 0
        });
        emit VoterRegistered(_voter);
    }
    
    function castVote(uint256 _candidateId) external 
        onlyDuringState(VotingState.Voting) 
    {
        require(voters[msg.sender].isRegistered, "Voter not registered");
        require(!voters[msg.sender].hasVoted, "Already voted");
        require(_candidateId < candidates.length, "Invalid candidate");
        
        voters[msg.sender].hasVoted = true;
        voters[msg.sender].votedCandidateId = _candidateId;
        candidates[_candidateId].voteCount++;
        totalVotes++;
        
        emit VoteCast(msg.sender, _candidateId);
    }
    
    function setState(VotingState _newState) external onlyOwner {
        require(_newState > state, "Can only move to next state");
        state = _newState;
        emit VotingStateChanged(_newState);
    }
    
    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }
    
    function getVoterStatus(address _voter) external view returns (bool isRegistered, bool hasVoted, uint256 votedCandidateId) {
        Voter memory voter = voters[_voter];
        return (voter.isRegistered, voter.hasVoted, voter.votedCandidateId);
    }
}