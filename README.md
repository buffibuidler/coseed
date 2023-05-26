# Coseed: Streamlining Investment DAO Creation

## Project Track
EVMOS EVM Extensions Hackathon - DAO Tooling

## Problem Statement
The growing utilization of Decentralized Autonomous Organizations (DAOs) in the investment sector signifies their strong product-market fit. Despite this, setting up an investment DAO often presents significant challenges, such as pooling funds, tracking fund allocation and performance, and managing payout distributions. Coseed is our proposed solution to address these complexities.

## Features
Coseed enables the transformation of any digital wallet into a Web3-based investment club with a set of user-friendly tools. Our features include:

1. **DAO Creation Page**: Users can name their DAO, set a token for their DAO (which powers the cap table and governance), and define parameters such as the maximum club fund size, number of members, and the funding period.

2. **DAO Funding Page**: This page includes features to share an invite link for deposits, showcase tokens and collectibles, make investments into projects from the dashboard, and invest in tokens and NFTs directly via our platform. Furthermore, it allows for the distribution of a monthly allocation to members in a batch manner.

3. **DAO Showcase Page**: This section will provide further details and functionalities yet to be disclosed.

## User Flow
Here is a step-by-step overview of how Coseed works:

1. Prepare your EVMOS wallet (Metamask or Keplr).
2. Create an investment DAO directly from your wallet.
3. Share a link to collect deposits until funding is complete.
4. Members receive a proportion of the club equivalent to their deposit.
5. Members vote on investment decisions via snapshot.
6. The DAO makes investments into selected projects and receives allocations.
7. The DAO receives token distributions monthly or via vesting.
8. Distributions are dispersed to members in proportion to returns.

## Core Technology
Coseed utilizes a variety of technological components to provide its features:

- **Mongo DB**: Stores deposits in proportion to the total fund.
- **Deposit Function**: Transfers deposits to the wallet.
- **ERC20 Minting**: After funding is completed, an ERC20 token reflecting each member's proportion is minted.
- **Voting Mechanism**: Uses snapshot for voting on investment decisions (using the governance token).
- **Performance Tracker**: Monitors the DAO's investments and their returns.
- **Disperse.app Logic**: Handles the dispersion of returns to members.

By mitigating the complexities involved in creating and managing investment DAOs, Coseed aims to empower users in their decentralization efforts, all while maintaining transparency, efficiency, and user-centricity.
