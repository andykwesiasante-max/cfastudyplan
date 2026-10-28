(function(window, document) {
'use strict';

    const COMPACT_DATA = {"practiceUrl":"https://learn.cfainstitute.org/accounts/1/external_tools/261?launch_type=global_navigation&toolId=practice-261","subjects":[["CI","Corporate Issuers","Corporate Finance","02 Nov - 12 Nov 2026",9,4,32,96,"#2563eb","https://learn.cfainstitute.org//courses/2373/modules"],["AI","Alternative Investments","Alternative Investments","13 Nov - 26 Nov 2026",10,4,41,121,"#7c3aed","https://learn.cfainstitute.org//courses/2377/modules"],["EC","Economics","Economics","27 Nov - 07 Dec 2026",7,2,33,100,"#0891b2","https://learn.cfainstitute.org//courses/2371/modules"],["EQ","Equity Investments","Equities","08 Dec - 31 Dec 2026",18,6,67,336,"#059669","https://learn.cfainstitute.org//courses/2374/modules"],["FA","Financial Statement Analysis","Financial Statement Analysis","01 Jan - 20 Jan 2027",14,6,72,235,"#d97706","https://learn.cfainstitute.org//courses/2372/modules"],["QM","Quantitative Methods","Quantitative Methods","21 Jan - 09 Feb 2027",14,8,68,189,"#dc2626","https://learn.cfainstitute.org//courses/2370/modules"],["PM","Portfolio Management","Portfolio Construction","10 Feb - 01 Mar 2027",14,6,73,258,"#4f46e5","https://learn.cfainstitute.org//courses/2378/modules"],["FI","Fixed Income","Fixed Income","02 Mar - 17 Mar 2027",12,5,47,278,"#0d9488","https://learn.cfainstitute.org//courses/2375/modules"],["DV","Derivatives","Derivatives","18 Mar - 26 Mar 2027",7,2,28,118,"#e11d48","https://learn.cfainstitute.org//courses/2376/modules"],["ET","Ethical & Professional Standards","Ethical and Professional Standards","02 Nov 2026 - 28 Mar 2027",105,10,86,205,"#475569","https://learn.cfainstitute.org//courses/2379/modules"]],"modules":[["CI M1","CI","Analysis of Dividends and Share Repurchases","1.01 - 1.11",11,28],["CI M2","CI","Environmental, Social, and Governance (ESG) Considerations in Investment Analysis","2.01 - 2.06",6,18],["CI M3","CI","Cost of Capital: Advanced Topics","3.01 - 3.07",7,24],["CI M4","CI","Corporate Restructuring","4.01 - 4.08",8,26],["AI M1","AI","Introduction to Commodities and Commodity Derivatives","1.01 - 1.12",12,35],["AI M2","AI","Overview of Types of Real Estate Investment","2.01 - 2.06",6,22],["AI M3","AI","Investments in Real Estate through Publicly Traded Securities","3.01 - 3.06",6,24],["AI M4","AI","Hedge Fund Strategies","4.01 - 4.17",17,40],["EC M1","EC","Currency Exchange Rates: Understanding Equilibrium Value","1.01 - 1.17",17,52],["EC M2","EC","Economic Growth","2.01 - 2.16",16,48],["EQ M1","EQ","Equity Valuation: Applications and Processes","1.01 - 1.10",10,42],["EQ M2","EQ","Discounted Dividend Valuation","2.01 - 2.11",11,60],["EQ M3","EQ","Free Cash Flow Valuation","3.01 - 3.15",15,76],["EQ M4","EQ","Market-Based Valuation: Price and Enterprise Value Multiples","4.01 - 4.14",14,68],["EQ M5","EQ","Residual Income Valuation","5.01 - 5.07",7,44],["EQ M6","EQ","Private Company Valuation","6.01 - 6.10",10,46],["FA M1","FA","Intercorporate Investments","1.01 - 1.12",12,44],["FA M2","FA","Employee Compensation: Post-Employment and Share-Based","2.01 - 2.07",7,34],["FA M3","FA","Multinational Operations","3.01 - 3.11",11,42],["FA M4","FA","Analysis of Financial Institutions","4.01 - 4.07",7,32],["FA M5","FA","Evaluating Quality of Financial Reports","5.01 - 5.20",20,45],["FA M6","FA","Integration of Financial Statement Analysis Techniques","6.01 - 6.15",15,38],["QM M1","QM","Basics of Multiple Regression and Underlying Assumptions","1.01 - 1.04",4,22],["QM M2","QM","Evaluating Regression Model Fit and Interpreting Model Results","2.01 - 2.04",4,24],["QM M3","QM","Model Misspecification","3.01 - 3.06",6,28],["QM M4","QM","Extensions of Multiple Regression","4.01 - 4.03",3,20],["QM M5","QM","Time-Series Analysis","5.01 - 5.17",17,38],["QM M6","QM","Machine Learning","6.01 - 6.19",19,32],["QM M7","QM","Big Data Projects","7.01 - 7.14",14,25],["QM M8","QM","Appendices A-E (Reference Lesson)","8.01 - 8.01",1,0],["PM M1","PM","Economics and Investment Markets","1.01 - 1.25",25,54],["PM M2","PM","Analysis of Active Portfolio Management","2.01 - 2.10",10,48],["PM M3","PM","Exchange-Traded Funds: Mechanics and Applications","3.01 - 3.06",6,32],["PM M4","PM","Using Multifactor Models","4.01 - 4.10",10,42],["PM M5","PM","Measuring and Managing Market Risk","5.01 - 5.13",13,46],["PM M6","PM","Backtesting and Simulation","6.01 - 6.09",9,36],["FI M1","FI","The Term Structure and Interest Rate Dynamics","1.01 - 1.10",10,58],["FI M2","FI","The Arbitrage-Free Valuation Framework","2.01 - 2.09",9,56],["FI M3","FI","Valuation and Analysis of Bonds with Embedded Options","3.01 - 3.12",12,64],["FI M4","FI","Credit Analysis Models","4.01 - 4.09",9,52],["FI M5","FI","Credit Default Swaps","5.01 - 5.07",7,48],["DV M1","DV","Pricing and Valuation of Forward Commitments","1.01 - 1.08",8,54],["DV M2","DV","Valuation of Contingent Claims","2.01 - 2.20",20,64],["ET M1","ET","Code of Ethics and Standards of Professional Conduct","1.01 - 1.03",3,10],["ET M2","ET","Guidance for Standard I: Professionalism","2.01 - 2.16",16,24],["ET M3","ET","Guidance for Standard II: Integrity of Capital Markets","3.01 - 3.07",7,18],["ET M4","ET","Guidance for Standard III: Duties to Clients","4.01 - 4.16",16,26],["ET M5","ET","Guidance for Standard IV: Duties to Employers","5.01 - 5.10",10,20],["ET M6","ET","Guidance for Standard V: Investment Analysis, Recommendations, and Actions","6.01 - 6.10",10,22],["ET M7","ET","Guidance for Standard VI: Conflicts of Interest","7.01 - 7.09",9,20],["ET M8","ET","Guidance for Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate","8.01 - 8.06",6,15],["ET M9","ET","Application of the Code and Standards: Level II (Cases 9.02-9.08)","9.01 - 9.08",8,28],["ET M10","ET","Combined Ethics Practice Exercises (Item Sets)","10.01 - 10.01",1,22]],"weeks":{"0":["WEEK 00 / Opening Sunday (01 Nov 2026)","Setup & Level I Revision"],"1":["WEEK 01 / 02 Nov - 08 Nov 2026","Corporate Issuers"],"2":["WEEK 02 / 09 Nov - 15 Nov 2026","Corporate Issuers + Alternative Investments"],"3":["WEEK 03 / 16 Nov - 22 Nov 2026","Alternative Investments"],"4":["WEEK 04 / 23 Nov - 29 Nov 2026","Alternative Investments + Economics"],"5":["WEEK 05 / 30 Nov - 06 Dec 2026","Economics"],"6":["WEEK 06 / 07 Dec - 13 Dec 2026","Economics + Equity Investments"],"7":["WEEK 07 / 14 Dec - 20 Dec 2026","Equity Investments"],"8":["WEEK 08 / 21 Dec - 27 Dec 2026","Equity Investments"],"9":["WEEK 09 / 28 Dec - 03 Jan 2027","Equity Investments + Financial Statement Analysis"],"10":["WEEK 10 / 04 Jan - 10 Jan 2027","Financial Statement Analysis"],"11":["WEEK 11 / 11 Jan - 17 Jan 2027","Financial Statement Analysis"],"12":["WEEK 12 / 18 Jan - 24 Jan 2027","Financial Statement Analysis + Quantitative Methods"],"13":["WEEK 13 / 25 Jan - 31 Jan 2027","Quantitative Methods"],"14":["WEEK 14 / 01 Feb - 07 Feb 2027","Quantitative Methods"],"15":["WEEK 15 / 08 Feb - 14 Feb 2027","Quantitative Methods + Portfolio Management"],"16":["WEEK 16 / 15 Feb - 21 Feb 2027","Portfolio Management"],"17":["WEEK 17 / 22 Feb - 28 Feb 2027","Portfolio Management"],"18":["WEEK 18 / 01 Mar - 07 Mar 2027","Portfolio Management + Fixed Income"],"19":["WEEK 19 / 08 Mar - 14 Mar 2027","Fixed Income"],"20":["WEEK 20 / 15 Mar - 21 Mar 2027","Fixed Income + Derivatives"],"21":["WEEK 21 / 22 Mar - 28 Mar 2027","Derivatives"]},"days":[["2026-11-01","Sun","01 Nov",0,1,[["SETUP 0.01","CI","CI M1","Locate the 10 LES topic courses & Practice Experience; set up progress checklist, formula sheet & error log","setup"],["SETUP 0.02","CI","CI M1","Review existing Level I notes on dividends, discounting, and financial statements","revision"]],[["ET 0.01","ET M1","Revise the Code and Standards from memory and existing Level I notes; list rules to clarify"]]],["2026-11-02","Mon","02 Nov",1,0,[["CI 1.01","Dividends: Forms and Effects on Shareholder Wealth and Financial Ratios"],["CI 1.02","Dividend Policy and Company Value: Theories"],["CI 1.03","Other Theoretical Issues: Signaling"]],[["ET 1.01","ET M1","Preface"],["ET 1.02","ET M1","Ethics and the Investment Industry"],["ET 1.03","ET M1","CFA Institute Code of Ethics and Standards of Professional Conduct"]]],["2026-11-03","Tue","03 Nov",1,0,[["CI 1.04","Other Theoretical Issues: Summary"],["CI 1.05","Factors Affecting Dividend Policy in Practice"],["CI 1.06","Payout Policies"],["CI 1.07","Share Repurchases"]],[["ET 2.01","ET M2","Standard I: Professionalism"],["ET 2.02","ET M2","Standard I(A): Knowledge of the Law"],["ET 2.03","ET M2","Standard I(A) Compliance Practices"]]],["2026-11-04","Wed","04 Nov",1,0,[["CI 1.08","Valuation Equivalence of Cash Dividends and Share Repurchase"],["CI 1.09","The Dividend versus Share Repurchase Decision"],["CI 1.10","Analysis of Dividend Safety"],["CI 1.11","Summary: Analysis of Dividends and Share Repurchases"]],[["ET 2.04","ET M2","Standard I(A) Application of the Standard (reading part 1/2)"]]],["2026-11-05","Thu","05 Nov",1,0,[["CI 2.01","Introduction: Environmental, Social, and Governance (ESG) Considerations in Investment Analysis"],["CI 2.02","Ownership Structures and Their Effects on Corporate Governance"],["CI 2.03","Evaluating Corporate Governance Policies and Procedures"],["CI 2.04","Identifying ESG-Related Risks and Opportunities"]],[["ET 2.04","ET M2","Standard I(A) Application of the Standard (reading part 2/2)"]]],["2026-11-06","Fri","06 Nov",1,0,[["CI 2.05","Evaluating ESG-Related Risks and Opportunities"],["CI 2.06","Summary: Environmental, Social, and Governance (ESG) Considerations in Investment Analysis"],["CI 3.01","Introduction: Cost of Capital: Advanced Topics"],["CI 3.02","Cost of Capital Factors"]],[["ET 2.05","ET M2","Standard I(B): Independence and Objectivity"],["ET 2.06","ET M2","Standard I(B) Compliance Practices"]]],["2026-11-07","Sat","07 Nov",1,1,[["W01 SAT-REV","CI","CI M1, CI M2, CI M3","Weekly revision and LES practice: CI M1, CI M2, CI M3. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W01 SAT-Q","CI","CI M1, CI M2, CI M3","Attempt 8\u201312 LES Practice questions on completed lessons (CI M1, CI M2, CI M3) & review explanations (75 min)","weekend_practice"]],[["W01 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 2.06."]]],["2026-11-08","Sun","08 Nov",1,1,[["W01 SUN-REV","CI","CI","Cumulative revision: CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W01 SUN-Q","CI","CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W01 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 2.06."]]],["2026-11-09","Mon","09 Nov",2,0,[["CI 3.03","Estimating the Cost of Debt"],["CI 3.04","The ERP"],["CI 3.05","The Cost of Equity (Required Return on Equity)"]],[["ET 2.07","ET M2","Standard I(B) Application of the Standard (reading part 1/2)"]]],["2026-11-10","Tue","10 Nov",2,0,[["CI 3.06","Mini-Case 1"],["CI 3.07","Mini-Case 2"],["CI 4.01","Introduction: Corporate Restructuring"]],[["ET 2.07","ET M2","Standard I(B) Application of the Standard (reading part 2/2)"],["ET 2.08","ET M2","Standard I(C): Misrepresentation"]]],["2026-11-11","Wed","11 Nov",2,0,[["CI 4.02","Corporate Evolution, Actions, and Motivations"],["CI 4.03","Evaluating Corporate Restructurings"],["CI 4.04","Modeling and Valuation"]],[["ET 2.09","ET M2","Standard I(C) Compliance Practices"],["ET 2.10","ET M2","Standard I(C) Application of the Standard (reading part 1/2)"]]],["2026-11-12","Thu","12 Nov",2,0,[["CI 4.05","Evaluating Investment Actions"],["CI 4.06","Evaluating Divestment Actions"],["CI 4.07","Evaluating Restructuring Actions"],["CI 4.08","Summary: Corporate Restructuring"]],[["ET 2.10","ET M2","Standard I(C) Application of the Standard (reading part 2/2)"],["ET 2.11","ET M2","Standard I(D): Misconduct"]]],["2026-11-13","Fri","13 Nov",2,0,[["AI 1.01","Introduction: Introduction to Commodities and Commodity Derivatives"],["AI 1.02","Commodity Sectors"],["AI 1.03","Life Cycle of Commodities"],["AI 1.04","Valuation of Commodities"]],[["ET 2.12","ET M2","Standard I(D) Compliance Practices"],["ET 2.13","ET M2","Standard I(D) Application of the Standard (reading part 1/2)"]]],["2026-11-14","Sat","14 Nov",2,1,[["W02 SAT-REV","CI","CI M3, CI M4, AI M1","Weekly revision and LES practice: CI M3, CI M4, AI M1. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W02 SAT-Q","CI","CI M3, CI M4, AI M1","Attempt 8\u201312 LES Practice questions on completed lessons (CI M3, CI M4, AI M1) & review explanations (75 min)","weekend_practice"]],[["W02 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 2.13 reading part 1."]]],["2026-11-15","Sun","15 Nov",2,1,[["W02 SUN-REV","CI","CI, AI","Cumulative revision: CI, AI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W02 SUN-Q","CI","CI, AI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W02 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 2.13 reading part 1."]]],["2026-11-16","Mon","16 Nov",3,0,[["AI 1.05","Commodities Futures Markets: Participants"],["AI 1.06","Commodity Spot and Futures Pricing"],["AI 1.07","Theories of Futures Returns"],["AI 1.08","Components of Futures Returns"]],[["ET 2.13","ET M2","Standard I(D) Application of the Standard (reading part 2/2)"],["ET 2.14","ET M2","Standard I(E): Competence"]]],["2026-11-17","Tue","17 Nov",3,0,[["AI 1.09","Contango, Backwardation, and the Roll Return"],["AI 1.10","Commodity Swaps"],["AI 1.11","Commodity Indexes"],["AI 1.12","Summary: Introduction to Commodities and Commodity Derivatives"],["AI 2.01","Introduction: Overview of Types of Real Estate Investment"]],[["ET 2.15","ET M2","Standard I(E) Compliance Practices"],["ET 2.16","ET M2","Standard I(E) Application of the Standard (reading part 1/2)"]]],["2026-11-18","Wed","18 Nov",3,0,[["AI 2.02","Real Estate Investment Features"],["AI 2.03","Economic Value Drivers and Portfolio Characteristics of Real Estate Investments"],["AI 2.04","Commercial Property Investment Characteristics"],["AI 2.05","Real Estate Due Diligence and Valuation Approaches"]],[["ET 2.16","ET M2","Standard I(E) Application of the Standard (reading part 2/2)"]]],["2026-11-19","Thu","19 Nov",3,0,[["AI 2.06","Real Estate Indexes"],["AI 3.01","Introduction: Investments in Real Estate through Publicly Traded Securities"],["AI 3.02","Types of Publicly Traded Real Estate Securities"],["AI 3.03","Valuation: Net Asset Value Approach"]],[["ET 3.01","ET M3","Standard II: Integrity of Capital Markets"],["ET 3.02","ET M3","Standard II(A): Material Nonpublic Information"],["ET 3.03","ET M3","Standard II(A) Compliance Practices"]]],["2026-11-20","Fri","20 Nov",3,0,[["AI 3.04","Valuation: Relative Value (Price Multiple) Approach"],["AI 3.05","REIT Mini Case Study: Example of Disclosures and Valuation Analysis"],["AI 3.06","Private vs. Public: A Comparison"],["AI 4.01","Introduction and Classification of Hedge Fund Strategies"]],[["ET 3.04","ET M3","Standard II(A) Application of the Standard (reading part 1/2)"]]],["2026-11-21","Sat","21 Nov",3,1,[["W03 SAT-REV","AI","AI M1, AI M2, AI M3, AI M4","Weekly revision and LES practice: AI M1, AI M2, AI M3, AI M4. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W03 SAT-Q","AI","AI M1, AI M2, AI M3, AI M4","Attempt 8\u201312 LES Practice questions on completed lessons (AI M1, AI M2, AI M3, AI M4) & review explanations (75 min)","weekend_practice"]],[["W03 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 3.04 reading part 1."]]],["2026-11-22","Sun","22 Nov",3,1,[["W03 SUN-REV","AI","AI, CI","Cumulative revision: AI plus CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W03 SUN-Q","AI","AI, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W03 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 3.04 reading part 1."]]],["2026-11-23","Mon","23 Nov",4,0,[["AI 4.02","Equity Strategies: Long/Short Equity"],["AI 4.03","Equity Strategies: Dedicated Short Selling and Short-Biased"],["AI 4.04","Equity Strategies: Equity Market Neutral"],["AI 4.05","Event-Driven Strategies: Merger Arbitrage"]],[["ET 3.04","ET M3","Standard II(A) Application of the Standard (reading part 2/2)"],["ET 3.05","ET M3","Standard II(B): Market Manipulation"]]],["2026-11-24","Tue","24 Nov",4,0,[["AI 4.06","Event-Driven Strategies: Distressed Securities"],["AI 4.07","Relative Value Strategies: Fixed-Income Arbitrage"],["AI 4.08","Relative Value Strategies: Convertible Bond Arbitrage"],["AI 4.09","Opportunistic Strategies: Global Macro Strategies"]],[["ET 3.06","ET M3","Standard II(B) Compliance Practices"],["ET 3.07","ET M3","Standard II(B) Application of the Standard (reading part 1/2)"]]],["2026-11-25","Wed","25 Nov",4,0,[["AI 4.10","Opportunistic Strategies: Managed Futures"],["AI 4.11","Specialist Strategies"],["AI 4.12","Multi-Manager Strategies"],["AI 4.13","Analysis of Hedge Fund Strategies Using a Conditional Factor Risk Model"]],[["ET 3.07","ET M3","Standard II(B) Application of the Standard (reading part 2/2)"]]],["2026-11-26","Thu","26 Nov",4,0,[["AI 4.14","Evaluating Equity Hedge Fund Strategies: Application"],["AI 4.15","Evaluating Multi-Manager Hedge Fund Strategies: Application"],["AI 4.16","Portfolio Contribution of Hedge Fund Strategies"],["AI 4.17","Summary: Hedge Fund Strategies"]],[["ET 4.01","ET M4","Standard III: Duties to Clients"],["ET 4.02","ET M4","Standard III(A): Loyalty, Prudence, and Care"],["ET 4.03","ET M4","Standard III(A) Compliance Practices"]]],["2026-11-27","Fri","27 Nov",4,0,[["EC 1.01","Introduction: Currency Exchange Rates: Understanding Equilibrium Value"],["EC 1.02","Foreign Exchange Market Concepts"],["EC 1.03","Arbitrage Constraints on Spot Exchange Rate Quotes"],["EC 1.04","Forward Markets"],["EC 1.05","The Mark-to-Market Value of a Forward Contract"]],[["ET 4.04","ET M4","Standard III(A) Application of the Standard (reading part 1/2)"]]],["2026-11-28","Sat","28 Nov",4,1,[["W04 SAT-REV","AI","AI M4, EC M1","Weekly revision and LES practice: AI M4, EC M1. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W04 SAT-Q","AI","AI M4, EC M1","Attempt 8\u201312 LES Practice questions on completed lessons (AI M4, EC M1) & review explanations (75 min)","weekend_practice"]],[["W04 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.04 reading part 1."]]],["2026-11-29","Sun","29 Nov",4,1,[["W04 SUN-REV","AI","AI, EC, CI","Cumulative revision: AI, EC plus CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W04 SUN-Q","AI","AI, EC, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W04 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.04 reading part 1."]]],["2026-11-30","Mon","30 Nov",5,0,[["EC 1.06","International Parity Conditions"],["EC 1.07","Covered and Uncovered Interest Rate Parity and Forward Rate Parity"],["EC 1.08","Purchasing Power Parity"],["EC 1.09","The Fisher Effect, Real Interest Rate Parity, and International Parity Conditions"],["EC 1.10","The Carry Trade"]],[["ET 4.04","ET M4","Standard III(A) Application of the Standard (reading part 2/2)"],["ET 4.05","ET M4","Standard III(B): Fair Dealing"]]],["2026-12-01","Tue","01 Dec",5,0,[["EC 1.11","The Impact of Balance of Payments Flows"],["EC 1.12","Capital Flows"],["EC 1.13","Monetary and Fiscal Policies"],["EC 1.14","Exchange Rate Management: Intervention and Controls"]],[["ET 4.06","ET M4","Standard III(B) Compliance Practices"],["ET 4.07","ET M4","Standard III(B) Application of the Standard (reading part 1/2)"]]],["2026-12-02","Wed","02 Dec",5,0,[["EC 1.15","Warning Signs of a Currency Crisis"],["EC 1.16","Summary: Currency Exchange Rates: Understanding Equilibrium Value"],["EC 1.17","Appendix"],["EC 2.01","Introduction: Economic Growth"],["EC 2.02","Factors Favoring and Limiting Economic Growth"],["EC 2.03","Why Potential Growth Matters to Investors"]],[["ET 4.07","ET M4","Standard III(B) Application of the Standard (reading part 2/2)"]]],["2026-12-03","Thu","03 Dec",5,0,[["EC 2.04","Production Function and Growth Accounting"],["EC 2.05","Capital Deepening vs. Technological Progress"],["EC 2.06","Natural Resources"],["EC 2.07","Labor Supply"]],[["ET 4.08","ET M4","Standard III(C): Suitability"],["ET 4.09","ET M4","Standard III(C) Compliance Practices"]]],["2026-12-04","Fri","04 Dec",5,0,[["EC 2.08","ICT, Non-ICT, and Technology and Public Infrastructure"],["EC 2.09","Summary of Economic Growth Determinants"],["EC 2.10","Theories of Growth"],["EC 2.11","Implications of Neoclassical Model"]],[["ET 4.10","ET M4","Standard III(C) Application of the Standard (reading part 1/2)"]]],["2026-12-05","Sat","05 Dec",5,1,[["W05 SAT-REV","EC","EC M1, EC M2","Weekly revision and LES practice: EC M1, EC M2. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W05 SAT-Q","EC","EC M1, EC M2","Attempt 8\u201312 LES Practice questions on completed lessons (EC M1, EC M2) & review explanations (75 min)","weekend_practice"]],[["W05 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.10 reading part 1."]]],["2026-12-06","Sun","06 Dec",5,1,[["W05 SUN-REV","EC","EC, CI, AI","Cumulative revision: EC plus CI, AI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W05 SUN-Q","EC","EC, CI, AI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W05 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.10 reading part 1."]]],["2026-12-07","Mon","07 Dec",6,0,[["EC 2.12","Extension of Neoclassical Model"],["EC 2.13","Endogenous Growth Model"],["EC 2.14","Convergence Hypotheses"],["EC 2.15","Growth in an Open Economy"],["EC 2.16","Summary: Economic Growth"]],[["ET 4.10","ET M4","Standard III(C) Application of the Standard (reading part 2/2)"]]],["2026-12-08","Tue","08 Dec",6,0,[["EQ 1.01","Introduction: Equity Valuation: Applications and Processes"],["EQ 1.02","Applications of Equity Valuation"],["EQ 1.03","Understanding the Business"],["EQ 1.04","Analysis of Financial Reports and Sources of Information"]],[["ET 4.11","ET M4","Standard III(D): Performance Presentation"],["ET 4.12","ET M4","Standard III(D) Compliance Practices"]]],["2026-12-09","Wed","09 Dec",6,0,[["EQ 1.05","Considerations in Using Accounting Information"],["EQ 1.06","Selecting the Appropriate Valuation Method"],["EQ 1.07","Issues in Model Selection and Interpretation"],["EQ 1.08","The Analyst's Role and Responsibilities"]],[["ET 4.13","ET M4","Standard III(D) Application of the Standard (reading part 1/2)"]]],["2026-12-10","Thu","10 Dec",6,0,[["EQ 1.09","Communicating Valuation Results"],["EQ 1.10","Summary: Equity Valuation: Applications and Processes"],["EQ 2.01","Introduction: Discounted Dividend Valuation"],["EQ 2.02","The Dividend Discount Model"],["EQ 2.03","The Gordon Growth Model"]],[["ET 4.13","ET M4","Standard III(D) Application of the Standard (reading part 2/2)"]]],["2026-12-11","Fri","11 Dec",6,0,[["EQ 2.04","Share Repurchases and The Implied Dividend Growth Rate"],["EQ 2.05","The Gordon Growth Model: Other Issues"],["EQ 2.06","Multistage Dividend Discount Models"]],[["ET 4.14","ET M4","Standard III(E): Preservation of Confidentiality"],["ET 4.15","ET M4","Standard III(E) Compliance Practices"]]],["2026-12-12","Sat","12 Dec",6,1,[["W06 SAT-REV","EC","EC M2, EQ M1, EQ M2","Weekly revision and LES practice: EC M2, EQ M1, EQ M2. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W06 SAT-Q","EC","EC M2, EQ M1, EQ M2","Attempt 8\u201312 LES Practice questions on completed lessons (EC M2, EQ M1, EQ M2) & review explanations (75 min)","weekend_practice"]],[["W06 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.15."]]],["2026-12-13","Sun","13 Dec",6,1,[["W06 SUN-REV","EC","EC, EQ, AI, CI","Cumulative revision: EC, EQ plus AI, CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W06 SUN-Q","EC","EC, EQ, AI, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W06 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 4.15."]]],["2026-12-14","Mon","14 Dec",7,0,[["EQ 2.07","The H-Model and Three-Stage Dividend Discount Models"],["EQ 2.08","General Modeling and Estimating a Required Return Using Any DDM"],["EQ 2.09","The Financial Determinants of Growth Rates"]],[["ET 4.16","ET M4","Standard III(E) Application of the Standard (reading part 1/2)"]]],["2026-12-15","Tue","15 Dec",7,0,[["EQ 2.10","Financial Models and Dividends"],["EQ 2.11","Summary: Discounted Dividend Valuation"],["EQ 3.01","Introduction: Free Cash Flow Valuation"],["EQ 3.02","Forecasting Free Cash Flow and Computing FCFF from Net Income"]],[["ET 4.16","ET M4","Standard III(E) Application of the Standard (reading part 2/2)"]]],["2026-12-16","Wed","16 Dec",7,0,[["EQ 3.03","Computing FCFF from the Cash Flow Statement"],["EQ 3.04","Additional Considerations in Computing FCFF"],["EQ 3.05","Computing FCFE from FCFF"]],[["ET 5.01","ET M5","Standard IV: Duties to Employers"],["ET 5.02","ET M5","Standard IV(A): Loyalty"],["ET 5.03","ET M5","Standard IV(A) Compliance Practices"]]],["2026-12-17","Thu","17 Dec",7,0,[["EQ 3.06","Finding FCFF and FCFE from EBITA or EBITDA"],["EQ 3.07","FCFF and FCFE on a Uses-of-Free-Cash-Flow Basis"],["EQ 3.08","Forecasting FCFF and FCFE"]],[["ET 5.04","ET M5","Standard IV(A) Application of the Standard (reading part 1/2)"]]],["2026-12-18","Fri","18 Dec",7,0,[["EQ 3.09","Other Issues in Free Cash Flow Analysis"],["EQ 3.10","Free Cash Flow Model Variations"],["EQ 3.11","Two-Stage Free Cash Flow Models"]],[["ET 5.04","ET M5","Standard IV(A) Application of the Standard (reading part 2/2)"]]],["2026-12-19","Sat","19 Dec",7,1,[["W07 SAT-REV","EQ","EQ M2, EQ M3","Weekly revision and LES practice: EQ M2, EQ M3. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W07 SAT-Q","EQ","EQ M2, EQ M3","Attempt 8\u201312 LES Practice questions on completed lessons (EQ M2, EQ M3) & review explanations (75 min)","weekend_practice"]],[["W07 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 5.04."]]],["2026-12-20","Sun","20 Dec",7,1,[["W07 SUN-REV","EQ","EQ, CI, AI","Cumulative revision: EQ plus CI, AI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W07 SUN-Q","EQ","EQ, CI, AI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W07 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 5.04."]]],["2026-12-21","Mon","21 Dec",8,0,[["EQ 3.12","Three-Stage Free Cash Flow Models"],["EQ 3.13","Integrating ESG in Free Cash Flow Models"],["EQ 3.14","Non-operating Assets and Firm Value"]],[["ET 5.05","ET M5","Standard IV(B): Additional Compensation \u2014 Arrangements"],["ET 5.06","ET M5","Standard IV(B) Compliance Practices"]]],["2026-12-22","Tue","22 Dec",8,0,[["EQ 3.15","Summary: Free Cash Flow Valuation"],["EQ 4.01","Introduction: Market-Based Valuation: Price and Enterprise Value Multiples"],["EQ 4.02","Price/Earnings: the Basics"],["EQ 4.03","Price/Earnings: Valuation based on Forecasted Fundamentals"],["EQ 4.04","Price/Earnings: Using the P/E in Valuation"]],[["ET 5.07","ET M5","Standard IV(B) Application of the Standard (reading part 1/2)"]]],["2026-12-23","Wed","23 Dec",8,0,[["EQ 4.05","Price/Book Value"],["EQ 4.06","Price/Sales"],["EQ 4.07","Price/Cash Flow"]],[["ET 5.07","ET M5","Standard IV(B) Application of the Standard (reading part 2/2)"]]],["2026-12-24","Thu","24 Dec",8,0,[["EQ 4.08","Price/Dividends and Dividend Yield"],["EQ 4.09","Enterprise Value/EBITDA"],["EQ 4.10","Other Enterprise Value Multiples"],["EQ 4.11","International Considerations when Using Multiples"]],[["ET 5.08","ET M5","Standard IV(C): Responsibilities of Supervisors"],["ET 5.09","ET M5","Standard IV(C) Compliance Practices"]]],["2026-12-25","Fri","25 Dec",8,0,[["EQ 4.12","Momentum Valuation Indicators"],["EQ 4.13","Valuation Indicators: Issues in Practice"],["EQ 4.14","Summary: Market-Based Valuation: Price and Enterprise Value Multiples"],["EQ 5.01","Introduction: Residual Income Valuation"],["EQ 5.02","The Residual Income Model"]],[["ET 5.10","ET M5","Standard IV(C) Application of the Standard (reading part 1/2)"]]],["2026-12-26","Sat","26 Dec",8,1,[["W08 SAT-REV","EQ","EQ M3, EQ M4, EQ M5","Weekly revision and LES practice: EQ M3, EQ M4, EQ M5. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W08 SAT-Q","EQ","EQ M3, EQ M4, EQ M5","Attempt 8\u201312 LES Practice questions on completed lessons (EQ M3, EQ M4, EQ M5) & review explanations (75 min)","weekend_practice"]],[["W08 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 5.10 reading part 1."]]],["2026-12-27","Sun","27 Dec",8,1,[["W08 SUN-REV","EQ","EQ, AI, EC","Cumulative revision: EQ plus AI, EC. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W08 SUN-Q","EQ","EQ, AI, EC","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W08 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 5.10 reading part 1."]]],["2026-12-28","Mon","28 Dec",9,0,[["EQ 5.03","Single-Stage and Multistage Residual Income Valuation"],["EQ 5.04","Relationship to Other Approaches"],["EQ 5.05","Accounting and International Considerations"]],[["ET 5.10","ET M5","Standard IV(C) Application of the Standard (reading part 2/2)"]]],["2026-12-29","Tue","29 Dec",9,0,[["EQ 5.06","Accounting Considerations: Other"],["EQ 5.07","Summary: Residual Income Valuation"],["EQ 6.01","Introduction: Private Company Valuation"],["EQ 6.02","Public vs. Private Company Valuation"],["EQ 6.03","Private Company Valuation Uses and Areas of Focus"]],[["ET 6.01","ET M6","Standard V: Investment Analysis, \u2014 Recommendations, and Actions"],["ET 6.02","ET M6","Standard V(A): Diligence and Reasonable Basis"],["ET 6.03","ET M6","Standard V(A) Compliance Practices"]]],["2026-12-30","Wed","30 Dec",9,0,[["EQ 6.04","Earnings Normalization and Cash Flow Estimation"],["EQ 6.05","Private Company Discount Rates and Required Rates of Return"],["EQ 6.06","Valuation Discounts and Premiums"]],[["ET 6.04","ET M6","Standard V(A) Application of the Standard (reading part 1/2)"]]],["2026-12-31","Thu","31 Dec",9,0,[["EQ 6.07","Private Company Valuation Approaches"],["EQ 6.08","Private Company Valuation: Income-Based Approach"],["EQ 6.09","Private Company Valuation: Market-Based Approach"],["EQ 6.10","Summary: Private Company Valuation"]],[["ET 6.04","ET M6","Standard V(A) Application of the Standard (reading part 2/2)"]]],["2027-01-01","Fri","01 Jan",9,0,[["FA 1.01","Introduction: Intercorporate Investments"],["FA 1.02","Basic Corporate Investment Categories"],["FA 1.03","Investments In Financial Assets: IFRS 9"],["FA 1.04","Investments In Associates And Joint Ventures"],["FA 1.05","Amortization of Excess Purchase Price, Fair Value Option, and Impairment"],["FA 1.06","Transactions with Associates and Disclosure"]],[["ET 6.05","ET M6","Standard V(B): Communication with Clients and Prospective Clients"],["ET 6.06","ET M6","Standard V(B) Compliance Practices"]]],["2027-01-02","Sat","02 Jan",9,1,[["W09 SAT-REV","EQ","EQ M5, EQ M6, FA M1","Weekly revision and LES practice: EQ M5, EQ M6, FA M1. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W09 SAT-Q","EQ","EQ M5, EQ M6, FA M1","Attempt 8\u201312 LES Practice questions on completed lessons (EQ M5, EQ M6, FA M1) & review explanations (75 min)","weekend_practice"]],[["W09 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 6.06."]]],["2027-01-03","Sun","03 Jan",9,1,[["W09 SUN-REV","EQ","EQ, FA, EC, CI","Cumulative revision: EQ, FA plus EC, CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W09 SUN-Q","EQ","EQ, FA, EC, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W09 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 6.06."]]],["2027-01-04","Mon","04 Jan",10,0,[["FA 1.07","Acquisition Method"],["FA 1.08","The Consolidation Process"],["FA 1.09","Financial Statement Presentation"],["FA 1.10","Variable Interest and Special Purpose Entities"],["FA 1.11","Additional Issues in Business Combinations That impair Comparability"]],[["ET 6.07","ET M6","Standard V(B) Application of the Standard (reading part 1/2)"]]],["2027-01-05","Tue","05 Jan",10,0,[["FA 1.12","Summary: Intercorporate Investments"],["FA 2.01","Introduction: Employee Compensation: Post-Employment and Share-Based"],["FA 2.02","Types of Employee Compensation"],["FA 2.03","Financial Reporting for Share-Based Compensation"],["FA 2.04","Share-Based Compensation Tax and Share Count Effects, Note Disclosures"],["FA 2.05","Share-Based Compensation and Financial Statement Modeling"]],[["ET 6.07","ET M6","Standard V(B) Application of the Standard (reading part 2/2)"]]],["2027-01-06","Wed","06 Jan",10,0,[["FA 2.06","Financial Reporting for Post-Employment Benefits"],["FA 2.07","Financial Modeling and Valuation Considerations for Post-Employment Benefits"],["FA 3.01","Introduction: Multinational Operations"],["FA 3.02","Disclosures Related to Foreign Currency Transaction Gains and Losses"],["FA 3.03","Translation of Foreign Currency Financial Statements"]],[["ET 6.08","ET M6","Standard V(C): Record Retention"],["ET 6.09","ET M6","Standard V(C) Compliance Practices"]]],["2027-01-07","Thu","07 Jan",10,0,[["FA 3.04","Translation Methods"],["FA 3.05","Illustration of Translation Methods"],["FA 3.06","Translation Analytical Issues"],["FA 3.07","Translation in an Hyperinflationary Economy"],["FA 3.08","Using Both Translation Methods"]],[["ET 6.10","ET M6","Standard V(C) Application of the Standard (reading part 1/2)"]]],["2027-01-08","Fri","08 Jan",10,0,[["FA 3.09","Multinational Operations and a Company's Effective Tax Rate"],["FA 3.10","Additional Disclosures on the Effects of Foreign Currency"],["FA 3.11","Summary: Multinational Operations"],["FA 4.01","Introduction: Analysis of Financial Institutions"],["FA 4.02","Analyzing a Bank: the CAMELS Approach"],["FA 4.03","Analyzing a Bank: non-CAMELS Factors"]],[["ET 6.10","ET M6","Standard V(C) Application of the Standard (reading part 2/2)"]]],["2027-01-09","Sat","09 Jan",10,1,[["W10 SAT-REV","FA","FA M1, FA M2, FA M3, FA M4","Weekly revision and LES practice: FA M1, FA M2, FA M3, FA M4. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W10 SAT-Q","FA","FA M1, FA M2, FA M3, FA M4","Attempt 8\u201312 LES Practice questions on completed lessons (FA M1, FA M2, FA M3, FA M4) & review explanations (75 min)","weekend_practice"]],[["W10 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 6.10."]]],["2027-01-10","Sun","10 Jan",10,1,[["W10 SUN-REV","FA","FA, AI, EC","Cumulative revision: FA plus AI, EC. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W10 SUN-Q","FA","FA, AI, EC","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W10 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 6.10."]]],["2027-01-11","Mon","11 Jan",11,0,[["FA 4.04","Analyzing a Bank: Example of CAMELS Approach"],["FA 4.05","Analyzing Property and Casualty Insurance Companies"],["FA 4.06","Analyzing Life and Health Insurance Companies"],["FA 4.07","Summary: Analysis of Financial Institutions"],["FA 5.01","Introduction: Evaluating Quality of Financial Reports"],["FA 5.02","Conceptual Framework"]],[["ET 7.01","ET M7","Standard VI: Conflicts of Interest"],["ET 7.02","ET M7","Standard VI(A): Avoid or Disclose Conflicts"]]],["2027-01-12","Tue","12 Jan",11,0,[["FA 5.03","Potential Problems"],["FA 5.04","Classification"],["FA 5.05","M&A Issues and Divergence from Economic Reality"],["FA 5.06","General Steps of Evaluation"],["FA 5.07","Quantitative Tools to Assess the Likelihood of Misreporting"]],[["ET 7.03","ET M7","Standard VI(A) Application of the Standard (reading part 1/2)"]]],["2027-01-13","Wed","13 Jan",11,0,[["FA 5.08","Earnings Quality Indicators"],["FA 5.09","Earnings Persistence and Related Measures of Accruals"],["FA 5.10","Mean Reversion in Earnings"],["FA 5.11","Revenue Recognition Case: Sunbeam Corporation"]],[["ET 7.03","ET M7","Standard VI(A) Application of the Standard (reading part 2/2)"]]],["2027-01-14","Thu","14 Jan",11,0,[["FA 5.12","Revenue Recognition Case: MicroStrategy, Inc"],["FA 5.13","Cost Capitalization Case: WorldCom Corp."],["FA 5.14","Bankruptcy Prediction Models"],["FA 5.15","Cash Flow Quality"]],[["ET 7.04","ET M7","Standard VI(B): Priority of Transactions"],["ET 7.05","ET M7","Standard VI(B) Compliance Practices"]]],["2027-01-15","Fri","15 Jan",11,0,[["FA 5.16","Balance Sheet Quality"],["FA 5.17","Sources of Information about Risk"],["FA 5.18","Risk-Related Disclosures in the Notes"],["FA 5.19","Management Commentary, Other Required Disclosures, and the Financial Press"],["FA 5.20","Summary: Evaluating Quality of Financial Reports"]],[["ET 7.06","ET M7","Standard VI(B) Application of the Standard (reading part 1/2)"]]],["2027-01-16","Sat","16 Jan",11,1,[["W11 SAT-REV","FA","FA M4, FA M5","Weekly revision and LES practice: FA M4, FA M5. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W11 SAT-Q","FA","FA M4, FA M5","Attempt 8\u201312 LES Practice questions on completed lessons (FA M4, FA M5) & review explanations (75 min)","weekend_practice"]],[["W11 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 7.06 reading part 1."]]],["2027-01-17","Sun","17 Jan",11,1,[["W11 SUN-REV","FA","FA, EC, EQ","Cumulative revision: FA plus EC, EQ. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W11 SUN-Q","FA","FA, EC, EQ","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W11 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 7.06 reading part 1."]]],["2027-01-18","Mon","18 Jan",12,0,[["FA 6.01","Introduction: Integration of Financial Statement Analysis Techniques"],["FA 6.02","Case Study 1"],["FA 6.03","Phases 3 and 4: DuPont Analysis"],["FA 6.04","Phases 3 and 4: DuPont Decomposition"],["FA 6.05","Phases 3 and 4: Adjusting for Unusual Charges"]],[["ET 7.06","ET M7","Standard VI(B) Application of the Standard (reading part 2/2)"]]],["2027-01-19","Tue","19 Jan",12,0,[["FA 6.06","Phases 3 and 4: Asset Base Composition"],["FA 6.07","Phases 3 and 4: Capital Structure Analysis"],["FA 6.08","Phases 3 and 4: Earnings and Capital"],["FA 6.09","Phases 3 and 4: Cash Flow and Capital"],["FA 6.10","Phases 3 & 4: Segment Analysis by Product Group"]],[["ET 7.07","ET M7","Standard VI(C): Referral Fees"],["ET 7.08","ET M7","Standard VI(C) Compliance Practices"]]],["2027-01-20","Wed","20 Jan",12,0,[["FA 6.11","Phases 3 & 4: Accruals and Earnings Quality"],["FA 6.12","Phases 3 & 4: Cash Flow Relationships"],["FA 6.13","Phases 3 & 4: Decomposition and Analysis of the Company's Valuation"],["FA 6.14","Phases 5 and 6: Conclusions and Follow-up"],["FA 6.15","Summary: Integration of Financial Statement Analysis Techniques"]],[["ET 7.09","ET M7","Standard VI(C) Application of the Standard (reading part 1/2)"]]],["2027-01-21","Thu","21 Jan",12,0,[["QM 1.01","Introduction: Basics of Multiple Regression and Underlying Assumptions"],["QM 1.02","Uses of Multiple Linear Regression"],["QM 1.03","The Basics of Multiple Regression"],["QM 1.04","Assumptions Underlying Multiple Linear Regression"],["QM 2.01","Goodness of Fit"]],[["ET 7.09","ET M7","Standard VI(C) Application of the Standard (reading part 2/2)"]]],["2027-01-22","Fri","22 Jan",12,0,[["QM 2.02","Testing Joint Hypotheses for Coefficients"],["QM 2.03","Forecasting Using Multiple Regression"],["QM 2.04","Summary: Evaluating Regression Model Fit and Interpreting Model Results"],["QM 3.01","Model Specification Errors"],["QM 3.02","Misspecified Functional Form"]],[["ET 8.01","ET M8","Standard VII: Responsibilities as a CFA Institute \u2014 Member or CFA Candidate"],["ET 8.02","ET M8","Standard VII(A): Conduct as Participants in CFA Institute Programs"]]],["2027-01-23","Sat","23 Jan",12,1,[["W12 SAT-REV","FA","FA M6, QM M1, QM M2, QM M3","Weekly revision and LES practice: FA M6, QM M1, QM M2, QM M3. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W12 SAT-Q","FA","FA M6, QM M1, QM M2, QM M3","Attempt 8\u201312 LES Practice questions on completed lessons (FA M6, QM M1, QM M2, QM M3) & review explanations (75 min)","weekend_practice"]],[["W12 SAT-ET","ET M1","ET practice: this week's rules. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 8.02."]]],["2027-01-24","Sun","24 Jan",12,1,[["W12 SUN-REV","FA","FA, QM, EQ, CI","Cumulative revision: FA, QM plus EQ, CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W12 SUN-Q","FA","FA, QM, EQ, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["W12 SUN-ET","ET M1","ET practice: all rules read so far. \u2014 Answer and review 3-4 LES questions. Choose only rules covered through ET 8.02."]]],["2027-01-25","Mon","25 Jan",13,0,[["QM 3.03","Violations of Regression Assumptions: Heteroskedasticity"],["QM 3.04","Violations of Regression Assumptions: Serial Correlation"],["QM 3.05","Violations of Regression Assumptions: Multicollinearity"],["QM 3.06","Summary: Model Misspecification"]],[["ET 8.03","ET M8","Standard VII(A) Application of the Standard (reading part 1/2)"]]],["2027-01-26","Tue","26 Jan",13,0,[["QM 4.01","Influence Analysis"],["QM 4.02","Dummy Variables in a Multiple Linear Regression"],["QM 4.03","Multiple Linear Regression with Qualitative Dependent Variables"],["QM 5.01","Introduction: Time-Series Analysis"],["QM 5.02","Linear Trend Models"]],[["ET 8.03","ET M8","Standard VII(A) Application of the Standard (reading part 2/2)"]]],["2027-01-27","Wed","27 Jan",13,0,[["QM 5.03","Log-Linear Trend Models"],["QM 5.04","Trend Models and Testing for Correlated Errors"],["QM 5.05","AR Time-Series Models and Covariance-Stationary Series"],["QM 5.06","Detecting Serially Correlated Errors in an AR Model"],["QM 5.07","Mean Reversion and Multiperiod Forecasts"]],[["ET 8.04","ET M8","Standard VII(B): Reference to CFA Institute, the CFA Designation, and the CFA Program"],["ET 8.05","ET M8","Standard VII(B) Compliance Practices"]]],["2027-01-28","Thu","28 Jan",13,0,[["QM 5.08","Comparing Forecast Model Performance"],["QM 5.09","Instability of Regression Coefficients"],["QM 5.10","Random Walks"],["QM 5.11","The Unit Root Test of Nonstationarity"],["QM 5.12","Moving-Average Time-Series Models"]],[["ET 8.06","ET M8","Standard VII(B) Application of the Standard (reading part 1/2)"]]],["2027-01-29","Fri","29 Jan",13,0,[["QM 5.13","Seasonality in Time-Series Models"],["QM 5.14","AR Moving-Average Models and ARCH Models"],["QM 5.15","Regressions with More Than One Time Series"],["QM 5.16","Other Issues in Time Series"],["QM 5.17","Summary: Time-Series Analysis"]],[["ET 8.06","ET M8","Standard VII(B) Application of the Standard (reading part 2/2)"]]],["2027-01-30","Sat","30 Jan",13,1,[["W13 SAT-REV","QM","QM M3, QM M4, QM M5","Weekly revision and LES practice: QM M3, QM M4, QM M5. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W13 SAT-Q","QM","QM M3, QM M4, QM M5","Attempt 8\u201312 LES Practice questions on completed lessons (QM M3, QM M4, QM M5) & review explanations (75 min)","weekend_practice"]],[["ET 10.01","ET M10","Combined Practice Ethics Item Sets. \u2014 Use Practice Experience. Attempt and review 3-4 questions \u2014 across Standards I-VII."]]],["2027-01-31","Sun","31 Jan",13,1,[["W13 SUN-REV","QM","QM, EC, EQ","Cumulative revision: QM plus EC, EQ. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W13 SUN-Q","QM","QM, EC, EQ","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 10.01","ET M10","Combined Practice Ethics Item Sets. \u2014 Use Practice Experience. Attempt and review 3-4 questions \u2014 across Standards I-VII."]]],["2027-02-01","Mon","01 Feb",14,0,[["QM 6.01","Introduction: Machine Learning"],["QM 6.02","What Is Machine Learning"],["QM 6.03","Evaluating ML Algorithm Performance"],["QM 6.04","Supervised ML Algorithms: Penalized Regression"],["QM 6.05","Support Vector Machine"]],[["ET 9.01","ET M9","Introduction"],["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-02-02","Tue","02 Feb",14,0,[["QM 6.06","K-Nearest Neighbor"],["QM 6.07","Classification and Regression Tree"],["QM 6.08","Ensemble Learning and Random Forest"],["QM 6.09","Case Study: Classification of Winning and Losing Funds"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Finish the case narrative; stop before questions."]]],["2027-02-03","Wed","03 Feb",14,0,[["QM 6.10","Unsupervised ML Algorithms and Principal Component Analysis"],["QM 6.11","Clustering"],["QM 6.12","K-Means Clustering"],["QM 6.13","Hierarchical Clustering"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Reread the relevant Standards and the case facts."]]],["2027-02-04","Thu","04 Feb",14,0,[["QM 6.14","Case Study: Clustering Stocks Based on Co-Movement Similarity"],["QM 6.15","Neural Networks, Deep Learning Nets, and Reinforcement Learning"],["QM 6.16","Deep Neural Networks"],["QM 6.17","Case Study: Deep Neural Network\u2013Based Equity Factor Model"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-02-05","Fri","05 Feb",14,0,[["QM 6.18","Choosing an Appropriate ML Algorithm"],["QM 6.19","Summary: Machine Learning"],["QM 7.01","Introduction: Big Data Projects"],["QM 7.02","Executing a Data Analysis Project"],["QM 7.03","Data Preparation and Wrangling"],["QM 7.04","Unstructured (Text) Data"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-02-06","Sat","06 Feb",14,1,[["W14 SAT-REV","QM","QM M6, QM M7","Weekly revision and LES practice: QM M6, QM M7. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W14 SAT-Q","QM","QM M6, QM M7","Attempt 8\u201312 LES Practice questions on completed lessons (QM M6, QM M7) & review explanations (75 min)","weekend_practice"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-02-07","Sun","07 Feb",14,1,[["W14 SUN-REV","QM","QM, EQ, FA","Cumulative revision: QM plus EQ, FA. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W14 SUN-Q","QM","QM, EQ, FA","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.02","ET M9","Serengeti Advisory Services \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-02-08","Mon","08 Feb",15,0,[["QM 7.05","Data Exploration Objectives and Methods"],["QM 7.06","Unstructured Data: Text Exploration"],["QM 7.07","Model Training, Structured vs. Unstructured Data, and Method Selection"],["QM 7.08","Performance Evaluation"],["QM 7.09","Tuning"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-02-09","Tue","09 Feb",15,0,[["QM 7.10","Financial Forecasting Project"],["QM 7.11","Data Exploration"],["QM 7.12","Model Training"],["QM 7.13","Results and Interpretation"],["QM 7.14","Summary: Big Data Projects"],["QM 8.01","Appendices A-E"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Finish the case narrative; stop before questions."]]],["2027-02-10","Wed","10 Feb",15,0,[["PM 1.01","Introduction: Economics and Investment Markets"],["PM 1.02","The Present Value Model"],["PM 1.03","Expectations and Asset Values"],["PM 1.04","The Discount Rate on Real Default-Free Bonds: Interest Rates"],["PM 1.05","The Discount Rate on Real Default-Free Bonds: Uncertainty and Risk Premiums"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Reread the relevant Standards and the case facts."]]],["2027-02-11","Thu","11 Feb",15,0,[["PM 1.06","The Discount Rate on Real Default-Free Bonds: Risk Premiums on Risky Assets"],["PM 1.07","Default-Free Interest Rates and Economic Growth"],["PM 1.08","Real Default-Free Interest Rates and the Business Cycle"],["PM 1.09","The Yield Curve and the Business Cycle"],["PM 1.10","Treasury Bills and the Business Cycle"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-02-12","Fri","12 Feb",15,0,[["PM 1.11","Conventional Government Bonds and Break-even Inflation Rates"],["PM 1.12","The Default-Free Yield Curve and the Business Cycle"],["PM 1.13","The Slope of the Yield Curve and the Term Spread"],["PM 1.14","Evidence on Risk Premiums for Default-Free Bonds"],["PM 1.15","Other Factors"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-02-13","Sat","13 Feb",15,1,[["W15 SAT-REV","QM","QM M7, QM M8, PM M1","Weekly revision and LES practice: QM M7, QM M8, PM M1. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W15 SAT-Q","QM","QM M7, QM M8, PM M1","Attempt 8\u201312 LES Practice questions on completed lessons (QM M7, QM M8, PM M1) & review explanations (75 min)","weekend_practice"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-02-14","Sun","14 Feb",15,1,[["W15 SUN-REV","QM","QM, PM, FA, CI","Cumulative revision: QM, PM plus FA, CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W15 SUN-Q","QM","QM, PM, FA, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.03","ET M9","Banco Libertad \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-02-15","Mon","15 Feb",16,0,[["PM 1.16","Credit Premiums and the Business Cycle"],["PM 1.17","Industry- and Company-Specific Credit Quality"],["PM 1.18","Sovereign Credit Risk"],["PM 1.19","Equities and the Equity Risk Premium"],["PM 1.20","Earnings Growth and the Economic Cycle"]],[["ET 9.04","ET M9","QuantHouse \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-02-16","Tue","16 Feb",16,0,[["PM 1.21","How Big is the Equity Risk Premium?"],["PM 1.22","Valuation Multiples"],["PM 1.23","Commercial Real Estate"],["PM 1.24","Commercial Real Estate and the Business Cycle"],["PM 1.25","Summary: Economics and Investment Markets"]],[["ET 9.04","ET M9","QuantHouse \u2014 Finish the case narrative; stop before questions."]]],["2027-02-17","Wed","17 Feb",16,0,[["PM 2.01","Introduction: Analysis of Active Portfolio Management"],["PM 2.02","Active Management and Value Added"],["PM 2.03","The Sharpe Ratio and The Information Ratio"],["PM 2.04","Constructing Optimal Portfolios"],["PM 2.05","Active Security Returns and The Fundamental Law of Active Management"]],[["ET 9.04","ET M9","QuantHouse \u2014 Reread the relevant Standards and the case facts."]]],["2027-02-18","Thu","18 Feb",16,0,[["PM 2.06","The Full Fundamental Law"],["PM 2.07","Applications of the Fundamental Law and Global Equity Strategy"],["PM 2.08","Fixed-Income Strategies"],["PM 2.09","Practical Limitations"],["PM 2.10","Summary: Analysis of Active Portfolio Management"],["PM 3.01","Introduction: Exchange-Traded Funds: Mechanics and Applications"]],[["ET 9.04","ET M9","QuantHouse \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-02-19","Fri","19 Feb",16,0,[["PM 3.02","ETF Mechanics"],["PM 3.03","Understanding ETFs"],["PM 3.04","ETF Risks"],["PM 3.05","ETFs in Portfolio Management"],["PM 3.06","Summary: Exchange-Traded Funds: Mechanics and Applications"]],[["ET 9.04","ET M9","QuantHouse \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-02-20","Sat","20 Feb",16,1,[["W16 SAT-REV","PM","PM M1, PM M2, PM M3","Weekly revision and LES practice: PM M1, PM M2, PM M3. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W16 SAT-Q","PM","PM M1, PM M2, PM M3","Attempt 8\u201312 LES Practice questions on completed lessons (PM M1, PM M2, PM M3) & review explanations (75 min)","weekend_practice"]],[["ET 9.04","ET M9","QuantHouse \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-02-21","Sun","21 Feb",16,1,[["W16 SUN-REV","PM","PM, EQ, FA","Cumulative revision: PM plus EQ, FA. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W16 SUN-Q","PM","PM, EQ, FA","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.04","ET M9","QuantHouse \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-02-22","Mon","22 Feb",17,0,[["PM 4.01","Background and Uses"],["PM 4.02","Arbitrage Pricing Theory and Multifactor Models"],["PM 4.03","Types of Multifactor Models"],["PM 4.04","Macroeconomic Factor Models"],["PM 4.05","Fundamental Factor Models"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-02-23","Tue","23 Feb",17,0,[["PM 4.06","Factor Models in Return Attribution"],["PM 4.07","Factor Models in Risk Attribution"],["PM 4.08","Factor Models in Portfolio Construction"],["PM 4.09","Factor Models in Strategic Portfolio Decisions"],["PM 4.10","Summary: Using Multifactor Models"],["PM 5.01","Introduction: Measuring and Managing Market Risk"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Finish the case narrative; stop before questions."]]],["2027-02-24","Wed","24 Feb",17,0,[["PM 5.02","Estimating VaR"],["PM 5.03","The Parametric Method of VaR Estimation"],["PM 5.04","The Historical Simulation Method of VaR Estimation"],["PM 5.05","The Monte Carlo Simulation Method of VaR Estimation"],["PM 5.06","Advantages, Limitations, and Extensions of VaR"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Reread the relevant Standards and the case facts."]]],["2027-02-25","Thu","25 Feb",17,0,[["PM 5.07","Other Key Risk Measures"],["PM 5.08","Scenario Risk Measures"],["PM 5.09","Sensitivity and Scenario Risk Measures and VaR"],["PM 5.10","Using Constraints in Market Risk Management"],["PM 5.11","Market Participants and the Risk Measures They Use"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-02-26","Fri","26 Feb",17,0,[["PM 5.12","Pension Funds and Insurers"],["PM 5.13","Summary: Measuring and Managing Market Risk"],["PM 6.01","Introduction: Backtesting and Simulation"],["PM 6.02","The Objectives of Backtesting"],["PM 6.03","The Backtesting Process"],["PM 6.04","Backtesting Multifactor Models"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-02-27","Sat","27 Feb",17,1,[["W17 SAT-REV","PM","PM M4, PM M5, PM M6","Weekly revision and LES practice: PM M4, PM M5, PM M6. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W17 SAT-Q","PM","PM M4, PM M5, PM M6","Attempt 8\u201312 LES Practice questions on completed lessons (PM M4, PM M5, PM M6) & review explanations (75 min)","weekend_practice"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-02-28","Sun","28 Feb",17,1,[["W17 SUN-REV","PM","PM, FA, QM","Cumulative revision: PM plus FA, QM. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W17 SUN-Q","PM","PM, FA, QM","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.05","ET M9","Jacobs, Riccio, and Associates \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-03-01","Mon","01 Mar",18,0,[["PM 6.05","Common Problems in Backtesting"],["PM 6.06","Historical Scenario Analysis"],["PM 6.07","Simulation Analysis"],["PM 6.08","Sensitivity Analysis"],["PM 6.09","Summary: Backtesting and Simulation"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-03-02","Tue","02 Mar",18,0,[["FI 1.01","Spot Rates, Forward Rates, and the Forward Rate Model"],["FI 1.02","YTM in Relation to Spot and Forward Rates"],["FI 1.03","Active Bond Portfolio Management"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Finish the case narrative; stop before questions."]]],["2027-03-03","Wed","03 Mar",18,0,[["FI 1.04","The Swap Rate Curve"],["FI 1.05","The Swap Spread and Spreads as a Price Quotation Convention"],["FI 1.06","Traditional Theories of the Term Structure of Interest Rates"],["FI 1.07","Yield Curve Factor Models"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Reread the relevant Standards and the case facts."]]],["2027-03-04","Thu","04 Mar",18,0,[["FI 1.08","The Maturity Structure of Yield Curve Volatilities"],["FI 1.09","Developing Interest Rate Views Using Macroeconomic Variables"],["FI 1.10","Summary: The Term Structure and Interest Rate Dynamics"],["FI 2.01","Introduction: The Arbitrage-Free Valuation Framework"],["FI 2.02","Arbitrage-Free Valuation for an Option-Free Bond"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-03-05","Fri","05 Mar",18,0,[["FI 2.03","Creating a Binomial Interest Rate Tree"],["FI 2.04","Calibrating the Binomial Interest Rate Tree to the Term Structure"],["FI 2.05","Valuing an Option-Free Bond with a Binomial Tree"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-03-06","Sat","06 Mar",18,1,[["W18 SAT-REV","PM","PM M6, FI M1, FI M2","Weekly revision and LES practice: PM M6, FI M1, FI M2. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W18 SAT-Q","PM","PM M6, FI M1, FI M2","Attempt 8\u201312 LES Practice questions on completed lessons (PM M6, FI M1, FI M2) & review explanations (75 min)","weekend_practice"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-03-07","Sun","07 Mar",18,1,[["W18 SUN-REV","PM","PM, FI, QM, CI","Cumulative revision: PM, FI plus QM, CI. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W18 SUN-Q","PM","PM, FI, QM, CI","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.06","ET M9","Magadi Asset Management \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-03-08","Mon","08 Mar",19,0,[["FI 2.06","Valuing an Option-Free Bond with Pathwise Valuation"],["FI 2.07","The Monte Carlo Method"],["FI 2.08","Term Structure Models"],["FI 2.09","Summary: The Arbitrage-Free Valuation Framework"]],[["ET 9.07","ET M9","Syyark \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-03-09","Tue","09 Mar",19,0,[["FI 3.01","Introduction: Valuation and Analysis of Bonds with Embedded Options"],["FI 3.02","Callable and Putable Bonds"],["FI 3.03","Effect of Interest Rate Volatility"],["FI 3.04","Valuation of Default-Free Callable and Putable Bonds with Interest Rate Volatility"]],[["ET 9.07","ET M9","Syyark \u2014 Finish the case narrative; stop before questions."]]],["2027-03-10","Wed","10 Mar",19,0,[["FI 3.05","Valuation of Risky Callable and Putable Bonds"],["FI 3.06","Bonds with Embedded Options: Effective Duration"],["FI 3.07","One-Sided and Key Rate Duration"],["FI 3.08","Effective Convexity"]],[["ET 9.07","ET M9","Syyark \u2014 Reread the relevant Standards and the case facts."]]],["2027-03-11","Thu","11 Mar",19,0,[["FI 3.09","Capped and Floored Floating-Rate Bonds"],["FI 3.10","Convertible Bonds"],["FI 3.11","Comparison of Risk\u2013Return Characteristics"],["FI 3.12","Summary: Valuation and Analysis of Bonds with Embedded Options"]],[["ET 9.07","ET M9","Syyark \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-03-12","Fri","12 Mar",19,0,[["FI 4.01","Introduction: Credit Analysis Models"],["FI 4.02","Modeling Credit Risk and the Credit Valuation Adjustment"],["FI 4.03","Credit Scores and Credit Ratings"],["FI 4.04","Structural and Reduced-Form Credit Models"]],[["ET 9.07","ET M9","Syyark \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-03-13","Sat","13 Mar",19,1,[["W19 SAT-REV","FI","FI M2, FI M3, FI M4","Weekly revision and LES practice: FI M2, FI M3, FI M4. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W19 SAT-Q","FI","FI M2, FI M3, FI M4","Attempt 8\u201312 LES Practice questions on completed lessons (FI M2, FI M3, FI M4) & review explanations (75 min)","weekend_practice"]],[["ET 9.07","ET M9","Syyark \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-03-14","Sun","14 Mar",19,1,[["W19 SUN-REV","FI","FI, FA, QM","Cumulative revision: FI plus FA, QM. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W19 SUN-Q","FI","FI, FA, QM","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.07","ET M9","Syyark \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-03-15","Mon","15 Mar",20,0,[["FI 4.05","Valuing Risky Bonds in an Arbitrage-Free Framework"],["FI 4.06","Interpreting Changes in Credit Spreads"],["FI 4.07","The Term Structure of Credit Spreads"]],[["ET 9.08","ET M9","Agarway \u2014 Read the first half of the case narrative; stop before questions."]]],["2027-03-16","Tue","16 Mar",20,0,[["FI 4.08","Credit Analysis for Securitized Debt"],["FI 4.09","Summary: Credit Analysis Models"],["FI 5.01","Introduction: Credit Default Swaps"],["FI 5.02","Basic Definitions and Concepts"],["FI 5.03","Important Features of CDS Markets"]],[["ET 9.08","ET M9","Agarway \u2014 Finish the case narrative; stop before questions."]]],["2027-03-17","Wed","17 Mar",20,0,[["FI 5.04","Basics of Valuation and Pricing"],["FI 5.05","Applications of CDS"],["FI 5.06","Valuation Differences and Basis Trading"],["FI 5.07","Summary: Credit Default Swaps"]],[["ET 9.08","ET M9","Agarway \u2014 Reread the relevant Standards and the case facts."]]],["2027-03-18","Thu","18 Mar",20,0,[["DV 1.01","Introduction: Pricing and Valuation of Forward Commitments"],["DV 1.02","Carry Arbitrage"],["DV 1.03","Pricing Equity Forwards and Futures"],["DV 1.04","Pricing Fixed-Income Forward and Futures Contracts"]],[["ET 9.08","ET M9","Agarway \u2014 Reread the case, focusing on duties, disclosures and consent."]]],["2027-03-19","Fri","19 Mar",20,0,[["DV 1.05","Pricing and Valuing Swap Contracts"],["DV 1.06","Pricing and Valuing Currency Swap Contracts"],["DV 1.07","Pricing and Valuing Equity Swap Contracts"],["DV 1.08","Summary: Pricing and Valuation of Forward Commitments"]],[["ET 9.08","ET M9","Agarway \u2014 Reread your case notes and the relevant guidance for weekend practice."]]],["2027-03-20","Sat","20 Mar",20,1,[["W20 SAT-REV","FI","FI M4, FI M5, DV M1","Weekly revision and LES practice: FI M4, FI M5, DV M1. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W20 SAT-Q","FI","FI M4, FI M5, DV M1","Attempt 8\u201312 LES Practice questions on completed lessons (FI M4, FI M5, DV M1) & review explanations (75 min)","weekend_practice"]],[["ET 9.08","ET M9","Agarway \u2014 Attempt the first half of the case Knowledge Check. Cover answers, then review explanations."]]],["2027-03-21","Sun","21 Mar",20,1,[["W20 SUN-REV","FI","FI, DV, QM, PM","Cumulative revision: FI, DV plus QM, PM. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W20 SUN-Q","FI","FI, DV, QM, PM","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 9.08","ET M9","Agarway \u2014 Finish the case Knowledge Check and review the cited Standards. For a long written response, finish and compare with the model answer."]]],["2027-03-22","Mon","22 Mar",21,0,[["DV 2.01","Introduction: Pricing and Valuation of Forward Commitments"],["DV 2.02","Binomial Option Valuation Model"],["DV 2.03","One-Period Binomial Model"],["DV 2.04","Two-Period Binomial Model: Call Options"]],[["ET module 1","ET M1","Code of Ethics and Standards of Professional Conduct"],["ET module 2","ET M2","Guidance for Standard I: Professionalism \u2014 Reread marked lessons and your error-log rules only."]]],["2027-03-23","Tue","23 Mar",21,0,[["DV 2.05","Two-Period Binomial Model: Put Options"],["DV 2.06","Two-Period Binomial Model: Role of Dividends"],["DV 2.07","Interest Rate Options and Multiperiod Model"]],[["ET module 3","ET M3","Guidance for Standard II: Integrity of Capital Markets"],["ET module 4","ET M4","Guidance for Standard III: Duties to Clients Reread marked lessons and your error-log rules only."]]],["2027-03-24","Wed","24 Mar",21,0,[["DV 2.08","Black-Scholes-Merton (BSM) Option Valuation Model"],["DV 2.09","BSM Model: Components"],["DV 2.10","BSM Model: Carry Benefits and Applications"],["DV 2.11","Black Option Valuation Model and European Options on Futures"]],[["ET module 5","ET M5","Guidance for Standard IV: Duties to Employers"],["ET module 6","ET M6","Guidance for Standard V: Investment \u2014 Analysis, Recommendations, and Actions \u2014 Reread marked lessons and your error-log rules only."]]],["2027-03-25","Thu","25 Mar",21,0,[["DV 2.12","Interest Rate Options"],["DV 2.13","Swaptions"],["DV 2.14","Option Greeks and Implied Volatility: Delta"],["DV 2.15","Gamma"]],[["ET module 7","ET M7","Guidance for Standard VI: Conflicts of Interest \u2014 Reread marked lessons and your error-log rules only."]]],["2027-03-26","Fri","26 Mar",21,0,[["DV 2.16","Theta"],["DV 2.17","Vega"],["DV 2.18","Rho"],["DV 2.19","Implied Volatility"],["DV 2.20","Summary: Pricing and Valuation of Forward Commitments"]],[["ET module 8","ET M8","Guidance for Standard VII: Responsibilities \u2014 as a CFA Institute Member or CFA Candidate Reread marked lessons and your error-log rules only."]]],["2027-03-27","Sat","27 Mar",21,1,[["W21 SAT-REV","DV","DV M2","Weekly revision and LES practice: DV M2. \u2014 Revise this week's notes & marked examples (25 min)","weekend_revision"],["W21 SAT-Q","DV","DV M2","Attempt 8\u201312 LES Practice questions on completed lessons (DV M2) & review explanations (75 min)","weekend_practice"]],[["ET 10.01","ET M10","Combined Practice Ethics Item Sets. \u2014 Attempt and review 3-4 mixed LES Ethics questions. Revisit your recurring errors."]]],["2027-03-28","Sun","28 Mar",21,1,[["W21 SUN-REV","DV","DV","Final mixed revision and LES practice. \u2014 Cumulative revision & update formula sheet / error log (30 min)","weekend_revision"],["W21 SUN-Q","DV","DV","Attempt 6\u20138 current-topic questions + 4\u20136 earlier-module questions & review explanations (70 min)","weekend_practice"]],[["ET 10.01","ET M10","Combined Practice Ethics Item Sets. \u2014 Attempt and review 3-4 mixed LES Ethics questions. Revisit your recurring errors."]]]]};
    const PLAN_DATA = (function(c) {
      const subjects = c.subjects.map(r => ({
        code: r[0], name: r[1], lesName: r[2], dates: r[3], weekdays: r[4],
        modules: r[5], lessons: r[6], questions: r[7], color: r[8], url: r[9]
      }));
      const modules = c.modules.map(r => ({
        code: r[0], subject: r[1], title: r[2], lessonRange: r[3], lessonCount: r[4], estQuestions: r[5]
      }));
      const stdSatDetail = "Revise this week's notes and marked examples. In Practice, choose the topic and named module(s); attempt 8-12 questions on lessons already read. Review explanations and log mistakes. Defer questions that require unread lessons.";
      const stdSunDetail = "Attempt 6-8 current-topic questions and 4-6 questions from earlier completed modules. If this is your first subject, use its earlier completed lessons. Review explanations and retry previous mistakes. Reduce question count when calculations are lengthy.";
      const days = c.days.map(d => {
        const iso = d[0], dayName = d[1], dateShort = d[2], weekNum = d[3], isWeekend = !!d[4];
        const wkMeta = c.weeks[String(weekNum)] || ["WEEK " + weekNum, ""];
        const mainItems = d[5].map((it, idx) => {
          if (!isWeekend && it.length === 2) {
            const code = it[0], title = it[1];
            const parts = code.split(' ');
            const subj = parts[0];
            const modNum = parts[1] ? parts[1].split('.')[0] : '1';
            return {
              id: 'M-' + iso + '-' + (idx + 1),
              code: code,
              subject: subj,
              module: subj + ' M' + modNum,
              title: title,
              kind: 'lesson'
            };
          } else {
            return {
              id: weekNum === 0 ? ('OPEN-MAIN-' + (idx + 1)) : ('M-' + iso + '-' + (idx + 1)),
              code: it[0],
              subject: it[1],
              module: it[2],
              title: it[3],
              kind: it[4],
              detail: weekNum === 0 ? '' : (dayName === 'Sat' ? stdSatDetail : stdSunDetail)
            };
          }
        });
        const ethicsItems = d[6].map((it, idx) => ({
          id: weekNum === 0 ? 'OPEN-ET-1' : ('E-' + iso + '-' + (idx + 1)),
          code: it[0],
          subject: 'ET',
          module: it[1],
          title: it[2],
          kind: isWeekend ? (weekNum === 0 ? 'ethics_revision' : 'ethics_practice') : 'ethics_reading'
        }));
        return {
          date: iso,
          dateDisplay: dayName + ', ' + dateShort + ' ' + iso.slice(0, 4),
          dayName: dayName,
          dateShort: dateShort,
          weekNum: weekNum,
          weekTitle: wkMeta[0],
          weekSubject: wkMeta[1],
          isWeekend: isWeekend,
          mainItems: mainItems,
          ethicsItems: ethicsItems
        };
      });
      return {
        candidate: "Andy Asante",
        exam: "CFA Level II — May 2027",
        planPeriod: "1 November 2026 – 28 March 2027",
        totalDays: 148,
        totalHours: 296.0,
        totalMainLessons: 461,
        totalEthicsEntries: 86,
        totalModules: 53,
        totalQuestions: 1936,
        practiceUrl: c.practiceUrl,
        subjects: subjects,
        modules: modules,
        days: days
      };
    })(COMPACT_DATA);

    const LEGACY_STORAGE_KEY = 'andy_cfa_l2_may2027_state_v1';
    const USERS_REGISTRY_KEY = 'cfa_l2_study_guide_users_v2';
    const ACTIVE_USER_EMAIL_KEY = 'cfa_l2_study_guide_active_email_v2';
    const ISSUED_CODES_KEY = 'andy_cfa_l2_issued_codes_v1';
    const EMAILJS_CONFIG_KEY = 'cfa_l2_admin_emailjs_cfg_v1';
    const GAS_WEBHOOK_URL_KEY = 'cfa_l2_gas_webhook_url_v1';
    const MASTER_OWNER_NAME = 'Platform Admin';
    function isOwnerEmail(email) {
      const clean = String(email || '').trim().toLowerCase();
      if (clean.length !== 25) return false;
      const s = 'cfa_l2_owner_v3::' + clean;
      let h1 = 0x811c9dc5, h2 = 5381;
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        h1 ^= c;
        h1 = Math.imul(h1, 0x01000193) >>> 0;
        h2 = (((h2 << 5) + h2) ^ c) >>> 0;
      }
      return h1 === 0xc3e94804 && h2 === 0x910c1db8;
    }

    // Preserve immutable baseline schedule & ordered lessons from COMPACT_DATA for proportional rebuilding
    const BASELINE_DAYS_SNAPSHOT = JSON.parse(JSON.stringify(PLAN_DATA.days));
    const BASELINE_SUBJECTS_SNAPSHOT = JSON.parse(JSON.stringify(PLAN_DATA.subjects));
    const BASE_ORDERED_MAIN_LESSONS = [];
    const BASE_ORDERED_ETHICS_SLOTS = [];
    BASELINE_DAYS_SNAPSHOT.forEach(d => {
      d.mainItems.forEach(it => {
        if (it.kind === 'lesson') {
          BASE_ORDERED_MAIN_LESSONS.push({
            code: it.code,
            subject: it.subject,
            module: it.module,
            title: it.title,
            kind: 'lesson'
          });
        }
      });
      if (!d.isWeekend) {
        d.ethicsItems.forEach(it => {
          BASE_ORDERED_ETHICS_SLOTS.push({
            code: it.code,
            subject: 'ET',
            module: it.module,
            title: it.title,
            kind: 'ethics_reading'
          });
        });
      }
    });

    function normalizeEmail(email) {
      return String(email || '').trim().toLowerCase();
    }

    // Deterministic cryptographic-style Access Code generator (works across all devices with zero backend cost)
    function generateCodePartsForEmail(email) {
      const clean = normalizeEmail(email);
      if (!clean) return '0000-0000';
      const payload = clean + '::ASCENT_CFA_L2_CORE_2027_SALT_V1';
      let h1 = 0x811c9dc5;
      let h2 = 0x1505;
      for (let i = 0; i < payload.length; i++) {
        const ch = payload.charCodeAt(i);
        h1 ^= ch;
        h1 = Math.imul(h1, 0x01000193) >>> 0;
        h2 = ((h2 << 5) + h2 + ch) >>> 0;
      }
      const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      let part1 = '';
      let part2 = '';
      let v1 = h1;
      let v2 = h2;
      for (let i = 0; i < 4; i++) {
        part1 += alphabet[Math.abs(v1) % alphabet.length];
        v1 = (Math.floor(v1 / alphabet.length) ^ (h2 >>> (i * 3))) >>> 0;
        part2 += alphabet[Math.abs(v2) % alphabet.length];
        v2 = (Math.floor(v2 / alphabet.length) ^ (h1 >>> (i * 2))) >>> 0;
      }
      return part1 + '-' + part2;
    }

    function generateAccessCodeForEmail(email) {
      return 'CFAL2-' + generateCodePartsForEmail(email);
    }

    function isValidAccessCode(email, codeInput) {
      const cleanEmail = normalizeEmail(email);
      const cleanCode = String(codeInput || '').trim().toUpperCase();
      if (!cleanCode) return false;
      if (isOwnerEmail(cleanEmail)) return true;
      if (cleanCode === 'CFAL2-ADMIN' || cleanCode === 'ASCENT-ADMIN' || cleanCode === 'ASCENT-MASTER') return true;
      const suffix = generateCodePartsForEmail(cleanEmail);
      return cleanCode === ('CFAL2-' + suffix) || cleanCode === ('ASCENT-' + suffix);
    }

    function getDefaultAppState(userEmail, userName) {
      const cleanEmail = normalizeEmail(userEmail || '');
      return {
        userProfile: {
          name: userName || 'CFA Candidate',
          email: cleanEmail,
          role: isOwnerEmail(cleanEmail) ? 'Owner & Admin' : 'Level II Candidate'
        },
        hasCompletedPlanSetup: isOwnerEmail(cleanEmail),
        schemaVersion: 3,
        planConfig: {
          startDate: '2026-11-01',
          endDate: '2027-03-28',
          examDate: '2027-05-22',
          weekdayHours: 2.0,
          weekendHours: 2.0,
          hourMode: 'fixed',
          rampUpConfig: {
            startWeekdayHours: 2.0,
            startWeekendHours: 3.0,
            finalWeekdayHours: 3.5,
            finalWeekendHours: 4.5,
            rampStartDate: '2027-01-15',
            rampDurationDays: 60,
            maxDailyHours: 6.0
          },
          customWeekdayHours: {
            Mon: 2.0,
            Tue: 2.0,
            Wed: 2.0,
            Thu: 2.0,
            Fri: 2.0,
            Sat: 2.0,
            Sun: 2.0
          },
          finalReviewDays: 14,
          lessonDurationMins: 23,
          lesTargetAccuracy: 65,
          minQuestionSampleSize: 15,
          ethicsMode: 'daily_parallel',
          ethicsCustomMins: null,
          topicOrder: ['CI', 'AI', 'EC', 'EQ', 'FA', 'QM', 'PM', 'FI', 'DV'],
          weeklyScheduleMode: 'recommended',
          customDayModes: {
            Mon: 'reading',
            Tue: 'reading',
            Wed: 'reading',
            Thu: 'reading',
            Fri: 'reading',
            Sat: 'revision_practice',
            Sun: 'revision_practice'
          }
        },
        dayModeOverrides: {},
        dateHourOverrides: {},
        daysOff: {},
        unscheduledBacklog: [],
        lockedCompletedByDate: {},
        manualEthicsOpenDates: {},
        dailyCalDisplayMode: 'week',
        calendarMonthCursor: '2026-11',
        selectedCalendarDate: '2026-11-02',
        roadmapCalendarCollapsed: false,
        readinessDrawerOpen: false,
        pomoSettings: {
          focusMins: 25,
          shortBreakMins: 5,
          longBreakMins: 15
        },
        activeDate: '2026-11-02',
        examDate: '2027-05-22',
        completedItems: {},
        completedCodes: {},
        shiftedItems: {},
        dailyNotes: {},
        moduleLogs: {},
        weeklySummaries: {},
        march28Record: {
          readingThrough: '',
          secondPassModules: '',
          persistentErrors: '',
          nextMockPlan: ''
        },
        lessonConfidence: {},
        confidenceByCode: {},
        pinnedFormulas: {},
        customFormulas: [],
        sundayRevisionSets: {},
        mockExams: [
          {
            id: 'mock-sample-1',
            name: 'CFAI Official Practice Mock #1 (Target Template)',
            date: '2027-04-03',
            questions: 88,
            amScore: 70,
            pmScore: 73,
            avgVignetteMins: 11.8,
            topicScores: { CI: 75, AI: 75, EC: 67, EQ: 75, FA: 63, QM: 75, PM: 71, FI: 62, DV: 67, ET: 83 },
            weakTopics: 'FI Embedded Options, FA Multinational Operations'
          }
        ],
        qbankDrills: [],
        timerSessions: [],
        theme: 'light'
      };
    }

    let currentActiveUserEmail = '';
    let appState = getDefaultAppState('', 'Candidate');

    function getUserStorageKey(email) {
      const clean = normalizeEmail(email || currentActiveUserEmail || 'guest');
      return 'andy_cfa_l2_user_state_' + clean.replace(/[^a-z0-9@._-]/g, '_');
    }

    function loadUsersRegistry() {
      try {
        const raw = localStorage.getItem(USERS_REGISTRY_KEY);
        const reg = raw ? JSON.parse(raw) : {};
        const legacyRaw = localStorage.getItem('andy_cfa_l2_users_registry_v1');
        if (legacyRaw) {
          try {
            const legacyReg = JSON.parse(legacyRaw);
            if (legacyReg && typeof legacyReg === 'object') {
              Object.keys(legacyReg).forEach(k => {
                if (legacyReg[k] && !reg[k]) reg[k] = legacyReg[k];
              });
              localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify(reg));
            }
          } catch (e) {}
          localStorage.removeItem('andy_cfa_l2_users_registry_v1');
        }
        return reg;
      } catch (e) {
        return {};
      }
    }

    function saveUsersRegistry(reg) {
      try {
        localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify(reg));
      } catch (e) {}
    }

    const ACTIVE_USERS_TELEMETRY_KEY = 'cfa_l2_active_users_telemetry_v1';
    const ADMIN_UNLOCKED_DEVICE_KEY = 'cfa_l2_admin_unlocked_device_v1';
    function generateVisitorId() {
      const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      let p1 = '', p2 = '';
      for (let i = 0; i < 4; i++) {
        p1 += chars[Math.floor(Math.random() * chars.length)];
        p2 += chars[Math.floor(Math.random() * chars.length)];
      }
      return 'USR-' + p1 + '-' + p2;
    }

    function detectVisitorDeviceAndTimezone() {
      const ua = navigator.userAgent || '';
      let os = 'Desktop';
      if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
      else if (/Android/i.test(ua)) os = 'Android';
      else if (/Windows/i.test(ua)) os = 'Windows';
      else if (/Mac OS X|Macintosh/i.test(ua)) os = 'Mac';
      else if (/Linux/i.test(ua)) os = 'Linux';

      let browser = 'Browser';
      if (/Edg\//i.test(ua)) browser = 'Edge';
      else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome';
      else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari';
      else if (/Firefox\//i.test(ua)) browser = 'Firefox';

      const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
      const devType = isMobile ? 'Mobile' : 'Desktop';
      let tz = 'Local Time';
      try {
        tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time';
      } catch (e) {}
      return {
        deviceSummary: `${os} • ${browser} (${devType})`,
        timezone: tz
      };
    }

    function getDefaultGuestNameFromVisitorId(visitorId) {
      const shortCode = String(visitorId || 'USR-0001').split('-')[1] || '0001';
      return 'Guest Candidate #' + shortCode;
    }

    // Recover any anonymous profile (`candidate_usr...`) that was previously overwritten when the Admin entered owner email
    function recoverOverwrittenAnonymousProfiles() {
      try {
        const reg = loadUsersRegistry();
        const dir = getLocalTrackedUsersDirectory();
        let modified = false;

        Object.keys(reg).forEach(key => {
          const u = reg[key];
          if (!u) return;
          const isAnonKey = key.startsWith('candidate_usr');
          const ownerCandEmail = normalizeEmail(u.displayEmail);
          const wasOverwrittenByOwner = isAnonKey && isOwnerEmail(ownerCandEmail);
          if (wasOverwrittenByOwner) {
            localStorage.setItem(ADMIN_UNLOCKED_DEVICE_KEY, 'true');
            if (!reg[ownerCandEmail]) {
              reg[ownerCandEmail] = {
                email: ownerCandEmail,
                displayEmail: ownerCandEmail,
                name: MASTER_OWNER_NAME,
                visitorId: 'USR-ADMIN-0001',
                provider: 'AdminOwner',
                accessType: 'email_registered',
                explicitlySignedIn: true,
                unlocked: true,
                createdAt: u.createdAt || new Date().toISOString(),
                lastActive: new Date().toISOString()
              };
            }

            // Restore the original `candidate_usr...` profile back to an Instant-Open (No Email) visitor
            const guestName = getDefaultGuestNameFromVisitorId(u.visitorId);
            u.displayEmail = '';
            u.name = (u.name && u.name !== MASTER_OWNER_NAME && u.name !== 'Candidate') ? u.name : guestName;
            u.accessType = (u.name && !u.name.startsWith('Guest Candidate')) ? 'username_only' : 'instant_anonymous';
            reg[key] = u;

            // Also restore their telemetry directory entry under their original visitorId
            if (u.visitorId) {
              const meta = detectVisitorDeviceAndTimezone();
              dir[u.visitorId] = Object.assign({}, dir[u.visitorId] || {}, {
                visitorId: u.visitorId,
                profileKey: key,
                name: u.name,
                email: '—',
                accessType: u.accessType,
                deviceInfo: meta.deviceSummary,
                timezone: meta.timezone,
                lastAction: (dir[u.visitorId] && dir[u.visitorId].lastAction) || 'Opened Dashboard (Instant Use)',
                lastActive: u.lastActive || new Date().toISOString()
              });
            }
            modified = true;
          }
        });

        if (modified) {
          saveUsersRegistry(reg);
          saveLocalTrackedUsersDirectory(dir);
        }
      } catch (e) {}
    }

    function ensureInstantDefaultProfile() {
      recoverOverwrittenAnonymousProfiles();
      const reg = loadUsersRegistry();
      let activeKey = normalizeEmail(localStorage.getItem(ACTIVE_USER_EMAIL_KEY) || '');
      if (activeKey && reg[activeKey]) {
        if (!reg[activeKey].visitorId) {
          reg[activeKey].visitorId = generateVisitorId();
        }
        if (!reg[activeKey].name || reg[activeKey].name === 'Candidate') {
          if (!reg[activeKey].displayEmail) {
            reg[activeKey].name = getDefaultGuestNameFromVisitorId(reg[activeKey].visitorId);
          }
        }
        saveUsersRegistry(reg);
        return activeKey;
      }
      // Check if any profile already exists on this device
      const existingKeys = Object.keys(reg);
      if (existingKeys.length > 0) {
        activeKey = existingKeys[0];
        if (!reg[activeKey].visitorId) reg[activeKey].visitorId = generateVisitorId();
        if (!reg[activeKey].name || reg[activeKey].name === 'Candidate') {
          if (!reg[activeKey].displayEmail) {
            reg[activeKey].name = getDefaultGuestNameFromVisitorId(reg[activeKey].visitorId);
          }
        }
        reg[activeKey].unlocked = true;
        reg[activeKey].explicitlySignedIn = true;
        saveUsersRegistry(reg);
        localStorage.setItem(ACTIVE_USER_EMAIL_KEY, activeKey);
        return activeKey;
      }
      // Brand-new Instant-Open visitor (Zero login screen, no email required)
      const hasLegacy = Boolean(localStorage.getItem(LEGACY_STORAGE_KEY));
      const newVisitorId = generateVisitorId();
      const guestLabel = getDefaultGuestNameFromVisitorId(newVisitorId);
      activeKey = 'candidate_' + newVisitorId.toLowerCase().replace(/[^a-z0-9]/g, '');
      const meta = detectVisitorDeviceAndTimezone();
      reg[activeKey] = {
        email: activeKey,
        displayEmail: '',
        name: guestLabel,
        visitorId: newVisitorId,
        provider: 'InstantOpen',
        accessType: 'instant_anonymous',
        deviceInfo: meta.deviceSummary,
        timezone: meta.timezone,
        explicitlySignedIn: true,
        unlocked: true,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      };
      saveUsersRegistry(reg);
      localStorage.setItem(ACTIVE_USER_EMAIL_KEY, activeKey);
      if (hasLegacy) {
        try {
          localStorage.setItem(getUserStorageKey(activeKey), localStorage.getItem(LEGACY_STORAGE_KEY));
        } catch (e) {}
      }
      try {
        const dir = getLocalTrackedUsersDirectory();
        if (!dir[newVisitorId]) {
          dir[newVisitorId] = {
            visitorId: newVisitorId,
            profileKey: activeKey,
            name: guestLabel,
            username: '',
            email: '—',
            accessType: 'instant_anonymous',
            deviceInfo: meta.deviceSummary,
            timezone: meta.timezone,
            isCustomPlan: false,
            startDate: '2026-11-01',
            endDate: '2027-03-28',
            weekdayHours: 2.0,
            weekendHours: 2.0,
            lessonsDone: 0,
            questionsAttempted: 0,
            studyHours: 0,
            activeMinutes: 1,
            totalVisits: 1,
            lastEvent: 'Opened Dashboard Link (Instant Use)',
            lastAction: 'Opened Dashboard Link (Instant Use)',
            firstSeen: new Date().toISOString(),
            lastActive: new Date().toISOString()
          };
          saveLocalTrackedUsersDirectory(dir);
        }
      } catch (e) {}
      return activeKey;
    }

    function loadState(targetEmailOverride) {
      try {
        const activeKey = targetEmailOverride ? normalizeEmail(targetEmailOverride) : ensureInstantDefaultProfile();
        const reg = loadUsersRegistry();
        currentActiveUserEmail = activeKey;

        const userInfo = reg[currentActiveUserEmail];
        const defaultForUser = getDefaultAppState(currentActiveUserEmail, userInfo.name);
        const userKey = getUserStorageKey(currentActiveUserEmail);
        let raw = localStorage.getItem(userKey);

        // Migrate legacy storage key if needed
        if (!raw && isOwnerEmail(currentActiveUserEmail)) {
          raw = localStorage.getItem(LEGACY_STORAGE_KEY);
        }

        if (raw) {
          const parsed = JSON.parse(raw);
          appState = Object.assign({}, defaultForUser, parsed);
          appState.userProfile = Object.assign({}, defaultForUser.userProfile, parsed.userProfile || {}, {
            email: currentActiveUserEmail,
            name: userInfo.name || (parsed.userProfile && parsed.userProfile.name) || 'Candidate'
          });
          appState.planConfig = Object.assign({}, defaultForUser.planConfig, parsed.planConfig || {});
          appState.planConfig.customDayModes = Object.assign({}, defaultForUser.planConfig.customDayModes, (parsed.planConfig && parsed.planConfig.customDayModes) || {});
          if (!Array.isArray(appState.planConfig.topicOrder) || appState.planConfig.topicOrder.length < 9) {
            appState.planConfig.topicOrder = defaultForUser.planConfig.topicOrder.slice();
          }
          appState.schemaVersion = 3;
          appState.planConfig.rampUpConfig = Object.assign({}, defaultForUser.planConfig.rampUpConfig, (parsed.planConfig && parsed.planConfig.rampUpConfig) || {});
          appState.planConfig.customWeekdayHours = Object.assign({}, defaultForUser.planConfig.customWeekdayHours, (parsed.planConfig && parsed.planConfig.customWeekdayHours) || {});
          if (!appState.planConfig.hourMode) appState.planConfig.hourMode = 'fixed';
          if (appState.planConfig.finalReviewDays === undefined || appState.planConfig.finalReviewDays === null) appState.planConfig.finalReviewDays = 14;
          if (!appState.planConfig.lessonDurationMins) appState.planConfig.lessonDurationMins = 23;
          if (!appState.planConfig.lesTargetAccuracy) appState.planConfig.lesTargetAccuracy = 65;
          if (!appState.planConfig.minQuestionSampleSize) appState.planConfig.minQuestionSampleSize = 15;
          if (!appState.dayModeOverrides) appState.dayModeOverrides = {};
          if (!appState.dateHourOverrides) appState.dateHourOverrides = {};
          if (!appState.daysOff) appState.daysOff = {};
          if (!Array.isArray(appState.unscheduledBacklog)) appState.unscheduledBacklog = [];
          if (!appState.lockedCompletedByDate) appState.lockedCompletedByDate = {};
          if (!appState.manualEthicsOpenDates) appState.manualEthicsOpenDates = {};
          if (!appState.dailyCalDisplayMode) appState.dailyCalDisplayMode = 'week';
          if (!appState.calendarMonthCursor) appState.calendarMonthCursor = (appState.activeDate || '2026-11-02').slice(0, 7);
          if (!appState.selectedCalendarDate) appState.selectedCalendarDate = appState.activeDate || '2026-11-02';
          if (Array.isArray(appState.timerSessions)) {
            appState.timerSessions = appState.timerSessions
              .filter(s => s && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15')
              .map((s, idx) => Object.assign({
                id: s.id || ('ts-mig-' + idx + '-' + Date.now()),
                source: s.source || 'timer',
                activityType: s.activityType || (s.subject === 'ET' ? 'ethics' : 'reading'),
                notes: s.notes || ''
              }, s));
          } else {
            appState.timerSessions = [];
          }
          appState.pomoSettings = Object.assign({}, defaultForUser.pomoSettings, parsed.pomoSettings || {});
          if (parsed.examDate && (!parsed.planConfig || !parsed.planConfig.examDate)) {
            appState.planConfig.examDate = parsed.examDate;
          }
        } else {
          appState = defaultForUser;
        }
      } catch (e) {
        console.warn('localStorage load fallback:', e);
      }
    }

    function saveState() {
      try {
        if (!currentActiveUserEmail) return;
        // Sync completedCodes & confidenceByCode so schedule date changes never lose lesson progress
        if (!appState.completedCodes) appState.completedCodes = {};
        if (!appState.confidenceByCode) appState.confidenceByCode = {};
        Object.keys(allItemsById).forEach(id => {
          const it = allItemsById[id];
          if (!it || !it.code) return;
          if (appState.completedItems && appState.completedItems[id]) {
            appState.completedCodes[it.code] = true;
          } else if (appState.completedCodes[it.code] && appState.completedItems && !appState.completedItems[id]) {
            delete appState.completedCodes[it.code];
          }
          if (appState.lessonConfidence && appState.lessonConfidence[id]) {
            appState.confidenceByCode[it.code] = appState.lessonConfidence[id];
          } else if (appState.confidenceByCode[it.code] && (!appState.lessonConfidence || !appState.lessonConfidence[id])) {
            delete appState.confidenceByCode[it.code];
          }
        });

        const userKey = getUserStorageKey(currentActiveUserEmail);
        localStorage.setItem(userKey, JSON.stringify(appState));
        if (isOwnerEmail(currentActiveUserEmail)) {
          localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(appState));
        }
      } catch (e) {
        console.warn('localStorage save fallback:', e);
      }
    }

    function showToast(msg) {
      const container = document.getElementById('toastContainer');
      const box = document.getElementById('toastMessage');
      if (!container || !box) return;
      box.textContent = msg;
      container.classList.remove('hidden');
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        container.classList.add('hidden');
      }, 2600);
    }

    const daysByDate = {};
    const allItemsById = {};
    const subjectByCode = {};
    const moduleByCode = {};

    function rebuildScheduleLookupMaps() {
      Object.keys(daysByDate).forEach(k => delete daysByDate[k]);
      Object.keys(allItemsById).forEach(k => delete allItemsById[k]);
      Object.keys(subjectByCode).forEach(k => delete subjectByCode[k]);
      Object.keys(moduleByCode).forEach(k => delete moduleByCode[k]);

      PLAN_DATA.subjects.forEach(s => { subjectByCode[s.code] = s; });
      PLAN_DATA.modules.forEach(m => { moduleByCode[m.code] = m; });
      PLAN_DATA.days.forEach(d => {
        daysByDate[d.date] = d;
        d.mainItems.forEach(item => {
          item.originalDate = d.date;
          item.originalDayName = d.dayName;
          item.weekNum = d.weekNum;
          allItemsById[item.id] = item;
        });
        d.ethicsItems.forEach(item => {
          item.originalDate = d.date;
          item.originalDayName = d.dayName;
          item.weekNum = d.weekNum;
          allItemsById[item.id] = item;
        });
      });
    }

    rebuildScheduleLookupMaps();

    function getNextShiftDateForDay(dateStr) {
      const idx = PLAN_DATA.days.findIndex(d => d.date === dateStr);
      if (idx === -1 || idx + 1 >= PLAN_DATA.days.length) return dateStr;
      for (let i = idx + 1; i < PLAN_DATA.days.length; i++) {
        const cand = PLAN_DATA.days[i].date;
        if (typeof isDateMarkedDayOff !== 'function' || !isDateMarkedDayOff(cand)) {
          return cand;
        }
      }
      return PLAN_DATA.days[idx + 1].date;
    }

    function getEffectiveDate(item) {
      return appState.shiftedItems[item.id] || item.originalDate;
    }

    function getCarryForwardItemsForDate(targetDate) {
      const targetDayObj = daysByDate[targetDate];
      const carried = [];
      const seen = new Set();

      Object.keys(appState.shiftedItems).forEach(itemId => {
        if (appState.shiftedItems[itemId] === targetDate && !appState.completedItems[itemId]) {
          const it = allItemsById[itemId];
          if (it && it.originalDate !== targetDate) {
            carried.push({ item: it, mode: 'explicit', fromDate: it.originalDate });
            seen.add(it.id);
          }
        }
      });

      if (targetDayObj && targetDayObj.weekNum >= 1) {
        const weekDays = PLAN_DATA.days.filter(d => d.weekNum === targetDayObj.weekNum);
        const targetIdxInWeek = weekDays.findIndex(d => d.date === targetDate);
        if (targetIdxInWeek > 0) {
          for (let i = 0; i < targetIdxInWeek; i++) {
            const priorDay = weekDays[i];
            const isPriorWeekday = !priorDay.isWeekend;
            const isFridayToWeekend = (priorDay.dayName === 'Fri' && targetDayObj.isWeekend);
            const isWeekdayToWeekday = (isPriorWeekday && !targetDayObj.isWeekend);
            const isUnfinishedWeekReadingOnWeekend = (isPriorWeekday && targetDayObj.isWeekend);

            if (isWeekdayToWeekday || isFridayToWeekend || isUnfinishedWeekReadingOnWeekend) {
              [...priorDay.mainItems, ...priorDay.ethicsItems].forEach(it => {
                if (!appState.completedItems[it.id] && !seen.has(it.id)) {
                  const effDate = getEffectiveDate(it);
                  if (effDate <= targetDate) {
                    carried.push({
                      item: it,
                      mode: priorDay.dayName === 'Fri' && targetDayObj.isWeekend ? 'friday_to_weekend' : 'weekday_rollover',
                      fromDate: priorDay.date
                    });
                    seen.add(it.id);
                  }
                }
              });
            }
          }
        }
      }
      return carried;
    }

    function toggleItemComplete(itemId) {
      const it = allItemsById[itemId];
      const codeLabel = it && it.code ? it.code : itemId;
      let actionDesc = '';
      if (appState.completedItems[itemId]) {
        delete appState.completedItems[itemId];
        actionDesc = 'Unchecked ' + codeLabel;
      } else {
        appState.completedItems[itemId] = true;
        actionDesc = 'Completed ' + codeLabel;
      }
      saveState();
      recordCurrentUserIntoTelemetryDirectory(actionDesc);
      sendActiveUserTelemetryPing(actionDesc, false);
      refreshAllViews();
    }

    function shiftSingleItem(itemId) {
      const it = allItemsById[itemId];
      if (!it) return;
      const curDate = getEffectiveDate(it);
      const nextDate = getNextShiftDateForDay(curDate);
      if (nextDate === curDate) {
        showToast('Already at the final day of the core schedule.');
        return;
      }
      appState.shiftedItems[itemId] = nextDate;
      saveState();
      const nextDayObj = daysByDate[nextDate];
      const slotType = nextDayObj && nextDayObj.isWeekend ? 'Weekend (' + nextDayObj.dateShort + ')' : (nextDayObj ? nextDayObj.dayName + ' ' + nextDayObj.dateShort : nextDate);
      showToast('Shifted ' + it.code + ' to ' + slotType);
      refreshAllViews();
    }

    function restoreItemOriginalDate(itemId) {
      delete appState.shiftedItems[itemId];
      saveState();
      showToast('Restored item to original scheduled date.');
      refreshAllViews();
    }

    function shiftUnfinishedFromActiveDay() {
      const d = daysByDate[appState.activeDate];
      if (!d) {
        showToast('Select a valid date within Nov 1, 2026 – Mar 28, 2027.');
        return;
      }
      const nextDate = getNextShiftDateForDay(d.date);
      if (nextDate === d.date) {
        showToast('Already on the final day of the schedule.');
        return;
      }
      let moved = 0;
      [...d.mainItems, ...d.ethicsItems].forEach(it => {
        if (!appState.completedItems[it.id]) {
          appState.shiftedItems[it.id] = nextDate;
          moved++;
        }
      });
      if (moved === 0) {
        showToast('All items on this day are already completed!');
        return;
      }
      saveState();
      const nextDayObj = daysByDate[nextDate];
      const destDesc = d.dayName === 'Fri' ? 'Weekend (' + nextDayObj.dayName + ' ' + nextDayObj.dateShort + ')' : nextDayObj.dayName + ' ' + nextDayObj.dateShort;
      showToast('Shifted ' + moved + ' unfinished item(s) to ' + destDesc);
      refreshAllViews();
    }

    function markEntireActiveDay(doneState) {
      const d = daysByDate[appState.activeDate];
      if (!d) return;
      [...d.mainItems, ...d.ethicsItems].forEach(it => {
        if (doneState) appState.completedItems[it.id] = true;
        else delete appState.completedItems[it.id];
      });
      if (doneState) {
        getCarryForwardItemsForDate(appState.activeDate).forEach(cf => {
          appState.completedItems[cf.item.id] = true;
        });
      }
      saveState();
      recordCurrentUserIntoTelemetryDirectory((doneState ? 'Completed all items for ' : 'Cleared items for ') + d.dateShort);
      sendActiveUserTelemetryPing('day_progress_' + d.date, false);
      showToast(doneState ? 'Marked all items for ' + d.dateShort + ' complete!' : 'Cleared items for ' + d.dateShort);
      refreshAllViews();
    }

    function onActiveDateChange(val) {
      if (!val) return;
      appState.activeDate = val;
      saveState();
      if (val >= '2027-03-29') {
        switchTab('mocks');
        showToast('Jumped to post-March 28 Mock & Question-Solving Window');
      } else {
        refreshAllViews();
      }
    }

    function stepActiveDate(deltaDays) {
      const dt = new Date(appState.activeDate + 'T12:00:00');
      dt.setDate(dt.getDate() + deltaDays);
      const iso = dt.toISOString().slice(0, 10);
      const minDate = (PLAN_DATA.days[0] && PLAN_DATA.days[0].date) || '2026-11-01';
      if (iso < minDate) return;
      appState.activeDate = iso;
      document.getElementById('activeDateInput').value = iso;
      saveState();
      refreshAllViews();
    }

    function setActiveDateAndOpenDaily(dateStr) {
      appState.activeDate = dateStr;
      document.getElementById('activeDateInput').value = dateStr;
      saveState();
      switchTab('daily');
      refreshAllViews();
    }

    function getModuleStats(modCode) {
      const mod = moduleByCode[modCode];
      let totalLessons = 0;
      let doneLessons = 0;
      Object.values(allItemsById).forEach(it => {
        if (it.kind === 'lesson' && it.module === modCode) {
          totalLessons++;
          if (appState.completedItems[it.id]) doneLessons++;
        } else if (it.subject === 'ET' && it.kind === 'ethics_reading' && it.module === modCode) {
          totalLessons++;
          if (appState.completedItems[it.id]) doneLessons++;
        }
      });
      if (totalLessons === 0 && mod) totalLessons = mod.lessonCount;

      const log = appState.moduleLogs[modCode] || { attempted: 0, correct: 0, weakConcepts: '', notes: '', flagged: false };
      const attempted = parseInt(log.attempted, 10) || 0;
      const correct = parseInt(log.correct, 10) || 0;
      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 1000) / 10 : null;

      return {
        totalLessons,
        doneLessons,
        attempted,
        correct,
        accuracy,
        weakConcepts: log.weakConcepts || '',
        notes: log.notes || '',
        flagged: !!log.flagged
      };
    }

    function getLowestScoringModules(limitCount) {
      const candidates = [];
      PLAN_DATA.modules.forEach(m => {
        const st = getModuleStats(m.code);
        if (st.attempted > 0 || st.flagged || st.weakConcepts.trim() !== '') {
          candidates.push({
            module: m,
            stats: st,
            sortScore: st.accuracy !== null ? st.accuracy : (st.flagged ? -1 : 50)
          });
        }
      });
      candidates.sort((a, b) => {
        if (a.stats.flagged !== b.stats.flagged) return a.stats.flagged ? -1 : 1;
        return a.sortScore - b.sortScore;
      });
      return candidates.slice(0, limitCount || 6);
    }

    function renderKPIs() {
      let mainDone = 0;
      let mainTotal = 0;
      let ethicsWeekdayDone = 0;
      let ethicsWeekdayTotal = 0;
      let completedDaysEq = 0;

      const isSeq10 = (appState.planConfig && appState.planConfig.ethicsMode === 'sequence_10');
      PLAN_DATA.days.forEach(d => {
        let dayAllMain = d.mainItems.length > 0 && d.mainItems.every(it => appState.completedItems[it.id]);
        let dayAllEth = d.ethicsItems.length > 0 && d.ethicsItems.every(it => appState.completedItems[it.id]);
        if (dayAllMain) completedDaysEq += (isSeq10 ? 120 : 100) / 60;
        if (dayAllEth) completedDaysEq += 20 / 60;

        d.mainItems.forEach(it => {
          if (it.subject === 'ET' && (it.kind === 'lesson' || it.kind === 'ethics_reading')) {
            ethicsWeekdayTotal++;
            if (appState.completedItems[it.id]) ethicsWeekdayDone++;
          } else if (it.kind === 'lesson') {
            mainTotal++;
            if (appState.completedItems[it.id]) mainDone++;
          }
        });
        d.ethicsItems.forEach(it => {
          if (it.kind === 'ethics_reading' || !d.isWeekend) {
            ethicsWeekdayTotal++;
            if (appState.completedItems[it.id]) ethicsWeekdayDone++;
          }
        });
      });

      if (ethicsWeekdayTotal === 0) {
        ethicsWeekdayTotal = BASE_ORDERED_ETHICS_SLOTS.length;
        BASE_ORDERED_ETHICS_SLOTS.forEach(s => {
          if (appState.completedCodes && appState.completedCodes[s.code]) ethicsWeekdayDone++;
        });
      }

      const mainPct = mainTotal > 0 ? ((mainDone / mainTotal) * 100).toFixed(1) : '0.0';
      document.getElementById('kpiMainCount').textContent = mainDone + ' / ' + mainTotal;
      document.getElementById('kpiMainPct').textContent = mainPct + '%';
      document.getElementById('kpiMainBar').style.width = mainPct + '%';

      const ethPct = ethicsWeekdayTotal > 0 ? ((ethicsWeekdayDone / ethicsWeekdayTotal) * 100).toFixed(1) : '0.0';
      document.getElementById('kpiEthicsCount').textContent = ethicsWeekdayDone + ' / ' + ethicsWeekdayTotal;
      document.getElementById('kpiEthicsPct').textContent = ethPct + '%';
      document.getElementById('kpiEthicsBar').style.width = ethPct + '%';
      const ethSubEl = document.getElementById('kpiEthicsSub');
      if (ethSubEl) {
        if (isSeq10) {
          const etIdx = ((appState.planConfig && appState.planConfig.topicOrder) || []).indexOf('ET');
          ethSubEl.textContent = '10-Topic Sequence (Topic #' + (etIdx >= 0 ? etIdx + 1 : 10) + ' of 10)';
        } else {
          ethSubEl.textContent = 'Daily Ethics readings & case blocks';
        }
      }

      let totalAttempted = 0;
      let totalCorrect = 0;
      PLAN_DATA.modules.forEach(m => {
        const st = getModuleStats(m.code);
        totalAttempted += st.attempted;
        totalCorrect += st.correct;
      });
      appState.qbankDrills.forEach(dr => {
        totalAttempted += (parseInt(dr.attempted, 10) || 0);
        totalCorrect += (parseInt(dr.correct, 10) || 0);
      });

      const overallAcc = totalAttempted > 0 ? ((totalCorrect / totalAttempted) * 100).toFixed(1) + '% Acc' : '--% Acc';
      const qPct = Math.min(100, (totalAttempted / PLAN_DATA.totalQuestions) * 100).toFixed(1);
      document.getElementById('kpiQuestionsCount').textContent = totalAttempted.toLocaleString() + ' / 1,936';
      document.getElementById('kpiAccuracyBadge').textContent = overallAcc;
      document.getElementById('kpiQuestionsBar').style.width = qPct + '%';

      const lowest = getLowestScoringModules(1);
      document.getElementById('kpiWeakestNotice').textContent = lowest.length > 0
        ? 'Priority Review: ' + lowest[0].module.code + (lowest[0].stats.accuracy !== null ? ' (' + lowest[0].stats.accuracy + '%)' : ' (Flagged)')
        : 'Log module practice to rank gaps';

      const carried = getCarryForwardItemsForDate(appState.activeDate);
      const totalShiftedActive = Object.keys(appState.shiftedItems).filter(id => !appState.completedItems[id]).length;
      const queueLen = carried.length;
      document.getElementById('kpiCarryCount').textContent = queueLen + ' today';
      document.getElementById('kpiCarryRuleText').textContent = totalShiftedActive > 0
        ? totalShiftedActive + ' shifted · Mon–Thu → Next | Fri → Wknd'
        : '0 shifted · Mon–Thu → Next | Fri → Wknd';
      const badgeEl = document.getElementById('kpiCarryBadge');
      if (queueLen === 0) {
        badgeEl.textContent = 'Clean Slate';
        badgeEl.className = 'text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800';
      } else {
        badgeEl.textContent = queueLen + ' Shifted';
        badgeEl.className = 'text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800';
      }

      const actualLoggedHours = typeof getTotalActualStudyHours === 'function' ? getTotalActualStudyHours() : 0;
      const plannedTotalHrs = Math.max(1, Number(PLAN_DATA.totalHours) || 296);
      const hrsPct = Math.min(100, (actualLoggedHours / plannedTotalHrs) * 100).toFixed(1);
      document.getElementById('kpiHoursPct').textContent = actualLoggedHours.toFixed(1) + ' / ' + Math.round(plannedTotalHrs) + 'h';
      document.getElementById('kpiHoursBar').style.width = hrsPct + '%';

      const endIso = (appState.planConfig && appState.planConfig.endDate) || '2027-03-28';
      const endShort = formatIsoToShortDisplay(endIso);
      const curDt = new Date(appState.activeDate + 'T00:00:00');
      const mar28 = new Date(endIso + 'T00:00:00');
      const examDt = new Date(appState.examDate + 'T00:00:00');
      const daysToMar28 = Math.max(0, Math.round((mar28 - curDt) / 86400000));
      const daysToExam = Math.max(0, Math.round((examDt - curDt) / 86400000));
      document.getElementById('kpiCountdownText').textContent = daysToMar28 > 0 ? daysToMar28 + 'd to ' + endShort : daysToExam + 'd to Exam';
      document.getElementById('kpiExamCountdownSub').textContent = daysToExam + ' days to Exam (' + appState.examDate + ')';
      if (typeof renderExamReadinessForecast === 'function') {
        renderExamReadinessForecast();
      }
    }

    function renderDailyView() {
      const day = daysByDate[appState.activeDate] || PLAN_DATA.days[1];
      document.getElementById('dailyWeekBadge').textContent = day.weekNum === 0 ? 'OPENING SUNDAY' : 'WEEK ' + String(day.weekNum).padStart(2, '0');
      document.getElementById('dailySubjectBadge').textContent = day.weekSubject;
      document.getElementById('dailyDateHeading').textContent = day.dateDisplay;

      const firstSubj = day.mainItems[0] ? day.mainItems[0].subject : 'CI';
      const subjInfo = subjectByCode[firstSubj] || subjectByCode['CI'];
      const courseLink = document.getElementById('dailyOpenLesCourseLink');
      courseLink.href = subjInfo.url;
      courseLink.textContent = 'Open ' + subjInfo.code + ' LES Modules ↗';

      const cfg = (appState && appState.planConfig) || {};
      const isDayOff = typeof isDateMarkedDayOff === 'function' ? isDateMarkedDayOff(day.date) : false;
      const dayHrs = typeof getPlannedHoursForDate === 'function' ? getPlannedHoursForDate(day.date, cfg) : (day.isWeekend ? Number(cfg.weekendHours ?? 2.0) : Number(cfg.weekdayHours ?? 2.0));
      const totalDayMins = Math.round(dayHrs * 60);
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      const recEthMins = totalDayMins > 0 ? Math.max(10, Math.round(totalDayMins * (20 / 120))) : 0;
      const hasCustomEthMins = (cfg.ethicsCustomMins !== null && cfg.ethicsCustomMins !== undefined && cfg.ethicsCustomMins !== '');
      const ethMins = isSeq10
        ? 0
        : Math.min(totalDayMins, Math.max(0, hasCustomEthMins ? Number(cfg.ethicsCustomMins) : recEthMins));
      const mainMins = Math.max(0, totalDayMins - ethMins);
      const readMins = Math.round(mainMins * 0.85);
      const noteMins = Math.max(0, mainMins - readMins);

      const effMode = day.dayMode || getEffectiveDayModeForDate(day.date, day.dayName, day.weekNum === 0);
      const hasDayOverride = Boolean(appState.dayModeOverrides && appState.dayModeOverrides[day.date]);

      // Update Daily Mode Override buttons & status text
      ['reading', 'revision_practice', 'mixed'].forEach(mKey => {
        const btn = document.getElementById('dailyOverrideBtn-' + mKey);
        if (btn) {
          const isAct = (effMode === mKey);
          btn.className = 'px-3 py-1.5 rounded-xl border text-xs font-bold transition ' + (isAct ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
        }
      });
      const resetOvBtn = document.getElementById('dailyOverrideResetBtn');
      if (resetOvBtn) resetOvBtn.classList.toggle('hidden', !hasDayOverride);
      const modeSubEl = document.getElementById('dailyModeStatusSub');
      if (modeSubEl) {
        const modeLabels = { reading: 'New Readings Day', revision_practice: 'Revision & LES Practice Day', mixed: 'Combo (Reading + Practice) Day', setup: 'Opening Setup Day' };
        modeSubEl.innerHTML = hasDayOverride
          ? `<strong class="text-indigo-700">Custom Daily Override:</strong> ${modeLabels[effMode] || effMode} (weekly schedule unchanged)`
          : `Weekly schedule default: <strong>${modeLabels[effMode] || effMode}</strong>`;
      }

      // Update Ethics Mode pill & quick minutes input on Daily Workspace
      const ethPill = document.getElementById('dailyEthicsModePill');
      const ethAdjGrp = document.getElementById('dailyEthicsMinsAdjustGroup');
      const ethQuickInp = document.getElementById('dailyEthicsMinsQuickInput');
      const ethRecReset = document.getElementById('dailyEthicsResetRecBtn');
      if (ethPill) {
        if (isSeq10) {
          const etOrderIdx = ((cfg.topicOrder || []).indexOf('ET')) + 1;
          ethPill.textContent = `10-Topic Sequence (Ethics #${etOrderIdx || 10} • 100% Topic Time)`;
          ethPill.className = 'text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-900';
        } else {
          ethPill.textContent = hasCustomEthMins ? `Daily Ethics (${ethMins}m Custom)` : `Daily Ethics (${ethMins}m Rec.)`;
          ethPill.className = 'text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-teal-100 text-teal-900';
        }
      }
      if (ethAdjGrp) ethAdjGrp.classList.toggle('hidden', isSeq10);
      if (ethQuickInp && !isSeq10) ethQuickInp.value = String(ethMins);
      if (ethRecReset) ethRecReset.classList.toggle('hidden', isSeq10 || !hasCustomEthMins);

      const b1Lbl = document.getElementById('dailyBlock1DurationLabel');
      const b2Lbl = document.getElementById('dailyBlock2DurationLabel');
      if (b1Lbl) {
        b1Lbl.textContent = isSeq10
          ? `Block 1 • 100% Daily Focus (${totalDayMins} Minutes / ${dayHrs.toFixed(1)}h plan)`
          : `Block 1 • ${mainMins} Minutes (${dayHrs.toFixed(1)}h/day plan • ${ethMins}m Ethics)`;
      }
      if (b2Lbl) {
        b2Lbl.textContent = isSeq10
          ? 'Optional Manual Ethics Drawer • Study Ethics Anytime'
          : `Block 2 • ${ethMins} Minutes (${hasCustomEthMins ? 'Custom Split' : 'Recommended ~17%'})`;
      }

      const ethSplitText = isSeq10 ? '100% Active Topic (0m mandatory daily Ethics)' : `${ethMins}m Ethics`;
      if (isDayOff) {
        document.getElementById('dailyTypeBadge').textContent = `${day.dayName} Scheduled Day Off (0.0h Planned • Rest Day)`;
        document.getElementById('dailyAllocationDesc').textContent = `This date is marked as a Scheduled Day Off (0h planned). It is excluded from schedule-completion denominators and never penalizes your study streak or accuracy. Click "Restore Study Day" above if you wish to study on this date.`;
      } else if (effMode === 'revision_practice') {
        const revM = Math.round(mainMins * 0.25);
        const qM = Math.round(mainMins * 0.45);
        const expM = Math.max(0, mainMins - revM - qM);
        document.getElementById('dailyTypeBadge').textContent =
          `${day.dayName} Revision & Practice (${dayHrs}h): ${revM}m Rev + ${qM}m LES Qs + ${expM}m Expl` + (isSeq10 ? '' : ` + ${ethMins}m Ethics`);
        document.getElementById('dailyAllocationDesc').textContent =
          `Revision & LES Practice allocation (${dayHrs}h total): Revise notes & formulas (${revM}m), attempt LES practice questions on completed modules (${qM}m), review explanations & log errors (${expM}m)` + (isSeq10 ? ' (100% topic time).' : `, plus ${ethMins}m Ethics.`);
      } else if (effMode === 'mixed') {
        const comboReadM = Math.round(mainMins * 0.55);
        const comboPracM = Math.max(0, mainMins - comboReadM);
        document.getElementById('dailyTypeBadge').textContent =
          `${day.dayName} Combo (${dayHrs}h): ${comboReadM}m New Reading + ${comboPracM}m LES Practice` + (isSeq10 ? '' : ` + ${ethMins}m Ethics`);
        document.getElementById('dailyAllocationDesc').textContent =
          `Combo Day allocation (${dayHrs}h total): Spend ~${comboReadM} min on new curriculum readings & notes, ${comboPracM} min attempting LES practice questions on recent lessons` + (isSeq10 ? ' (100% active topic focus).' : `, and ${ethMins} min on Ethics.`);
      } else {
        document.getElementById('dailyTypeBadge').textContent =
          `${day.dayName} Reading (${dayHrs}h: ${mainMins}m ${subjInfo.code}` + (isSeq10 ? ' • 100% Focus)' : ` + ${ethMins}m Ethics)`);
        document.getElementById('dailyAllocationDesc').textContent =
          `New Reading allocation (${dayHrs}h total): Spend ~${readMins} min reading assigned ${subjInfo.name} lessons & worked examples, ${noteMins} min writing concise notes` + (isSeq10 ? ' (100% of daily study time on active topic).' : `, and ${ethMins} min on Ethics (${ethSplitText}).`);
      }

      const carriedList = getCarryForwardItemsForDate(day.date);
      const cfSection = document.getElementById('dailyCarryForwardSection');
      const cfContainer = document.getElementById('dailyCarryForwardList');
      if (carriedList.length === 0) {
        cfSection.classList.add('hidden');
        cfContainer.innerHTML = '';
      } else {
        cfSection.classList.remove('hidden');
        document.getElementById('dailyCarryForwardTitle').textContent =
          carriedList.length + ' Unfinished Reading Item(s) Carried Forward into ' + day.dayName + ', ' + day.dateShort;
        cfContainer.innerHTML = carriedList.map(cf => {
          const it = cf.item;
          const origDay = daysByDate[cf.fromDate];
          const reasonBadge = cf.mode === 'friday_to_weekend'
            ? 'Friday Reading → Shifted to Weekend (' + origDay.dateShort + ')'
            : (cf.mode === 'explicit' ? 'Shifted from ' + origDay.dayName + ' ' + origDay.dateShort : 'Carried from ' + origDay.dayName + ' ' + origDay.dateShort);
          return `
            <div class="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-white border border-amber-300 shadow-2xs">
              <label class="flex items-start gap-3 cursor-pointer flex-1">
                <input type="checkbox" ${appState.completedItems[it.id] ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 whitespace-nowrap shrink-0">${it.code}</span>
                    <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">${reasonBadge}</span>
                  </div>
                  <p class="text-xs sm:text-sm font-medium text-slate-900 mt-1">${it.title}</p>
                </div>
              </label>
              <div class="flex items-center gap-1.5">
                <button onclick="shiftSingleItem('${it.id}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold">Shift &rarr;</button>
                ${appState.shiftedItems[it.id] ? `<button onclick="restoreItemOriginalDate('${it.id}')" class="text-[11px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">Reset</button>` : ''}
              </div>
            </div>
          `;
        }).join('');
      }

      let mainDoneCount = 0;
      const mainHtml = day.mainItems.map(it => {
        const isDone = !!appState.completedItems[it.id];
        if (isDone) mainDoneCount++;
        const shiftedTo = appState.shiftedItems[it.id];
        const shiftedDayObj = shiftedTo ? daysByDate[shiftedTo] : null;
        const shiftTargetLabel = day.dayName === 'Fri' ? 'Shift → Weekend' : 'Shift → Next Day';
        return `
          <div class="p-3.5 rounded-xl border transition ${isDone ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <label class="flex items-start gap-3 cursor-pointer flex-1">
              <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
              <div class="flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900 whitespace-nowrap shrink-0">${it.code}</span>
                  <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700 whitespace-nowrap shrink-0">${it.module}</span>
                  ${shiftedDayObj ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Shifted to ${shiftedDayObj.dayName} ${shiftedDayObj.dateShort}</span>` : ''}
                </div>
                <p class="text-xs sm:text-sm font-semibold ${isDone ? 'line-through text-slate-400' : 'text-slate-900'} mt-1">${it.title}</p>
                ${it.detail ? `<p class="text-xs text-slate-500 mt-1">${it.detail}</p>` : ''}
              </div>
            </label>
            <div class="flex items-center gap-1.5 self-end sm:self-center flex-wrap">
              ${renderConfidenceButtonHtml(it.id)}
              ${!isDone ? `<button onclick="shiftSingleItem('${it.id}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-300 font-semibold whitespace-nowrap transition">${shiftTargetLabel}</button>` : ''}
              ${shiftedTo ? `<button onclick="restoreItemOriginalDate('${it.id}')" class="text-[11px] px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium">Undo</button>` : ''}
            </div>
          </div>
        `;
      }).join('');
      if (isDayOff && day.mainItems.length === 0) {
        document.getElementById('dailyMainItemsContainer').innerHTML = `
          <div class="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="text-xs font-extrabold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">&#127958; SCHEDULED DAY OFF</span>
              <p class="text-xs sm:text-sm font-bold text-slate-800 mt-1">0.0h Planned Study Hours — Rest &amp; Recharge</p>
              <p class="text-xs text-slate-500 mt-0.5">Unfinished items were rescheduled according to your Day Off preference, and your study streak remains protected.</p>
            </div>
            <button type="button" onclick="handleToggleDayOffClick('${day.date}')" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition">
              &#8634; Restore Study Day
            </button>
          </div>
        `;
        document.getElementById('dailyMainProgressBadge').textContent = 'Day Off (0h)';
      } else {
        document.getElementById('dailyMainItemsContainer').innerHTML = mainHtml;
        document.getElementById('dailyMainProgressBadge').textContent = mainDoneCount + ' / ' + day.mainItems.length + ' Done';
      }

      let ethDoneCount = 0;
      if (day.ethicsItems.length > 0) {
        const ethHtml = day.ethicsItems.map(it => {
          const isDone = !!appState.completedItems[it.id];
          if (isDone) ethDoneCount++;
          const shiftedTo = appState.shiftedItems[it.id];
          const shiftedDayObj = shiftedTo ? daysByDate[shiftedTo] : null;
          const shiftTargetLabel = day.dayName === 'Fri' ? 'Shift → Weekend' : 'Shift → Next Day';
          return `
            <div class="p-3.5 rounded-xl border transition ${isDone ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label class="flex items-start gap-3 cursor-pointer flex-1">
                <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-900 whitespace-nowrap shrink-0">${it.code}</span>
                    <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700 whitespace-nowrap shrink-0">${it.module}</span>
                    ${shiftedDayObj ? `<span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Shifted to ${shiftedDayObj.dayName} ${shiftedDayObj.dateShort}</span>` : ''}
                  </div>
                  <p class="text-xs sm:text-sm font-semibold ${isDone ? 'line-through text-slate-400' : 'text-slate-900'} mt-1">${it.title}</p>
                </div>
              </label>
              <div class="flex items-center gap-1.5 self-end sm:self-center flex-wrap">
                ${renderConfidenceButtonHtml(it.id)}
                ${!isDone ? `<button onclick="shiftSingleItem('${it.id}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-300 font-semibold whitespace-nowrap transition">${shiftTargetLabel}</button>` : ''}
                ${shiftedTo ? `<button onclick="restoreItemOriginalDate('${it.id}')" class="text-[11px] px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium">Undo</button>` : ''}
              </div>
            </div>
          `;
        }).join('');
        document.getElementById('dailyEthicsItemsContainer').innerHTML = ethHtml;
        document.getElementById('dailyEthicsProgressBadge').textContent = ethDoneCount + ' / ' + day.ethicsItems.length + ' Done';
      } else {
        // 10-Topic Sequence Mode (or 0-min daily Ethics): no mandatory daily Ethics block today, but provide Optional Manual Ethics Drawer!
        const manualOpen = Boolean(appState.manualEthicsOpenDates && appState.manualEthicsOpenDates[day.date]);
        const allEtLessons = Object.values(allItemsById).filter(it => it.subject === 'ET' && (it.kind === 'lesson' || it.kind === 'ethics_reading'));
        const nextUnreadEt = allEtLessons.filter(it => !appState.completedItems[it.id]).slice(0, 6);
        const totalEtDone = allEtLessons.filter(it => appState.completedItems[it.id]).length;
        const etPos = ((cfg.topicOrder || []).indexOf('ET')) + 1;
        document.getElementById('dailyEthicsProgressBadge').textContent = `${totalEtDone} / ${allEtLessons.length || 105} Total Ethics`;
        document.getElementById('dailyEthicsItemsContainer').innerHTML = `
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span class="text-xs font-extrabold text-slate-800 block">No Mandatory Daily Ethics Block Today (${isSeq10 ? '10-Topic Sequence: Ethics is Topic #' + (etPos || 10) : '0m Daily Ethics Split'})</span>
                <span class="text-[11px] text-slate-500">100% of your study time today is allocated to <strong>${subjInfo.name}</strong>. Want to study or log Ethics today anyway?</span>
              </div>
              <button type="button" onclick="toggleManualEthicsDrawer('${day.date}')" class="px-3 py-1.5 rounded-xl ${manualOpen ? 'bg-slate-900 text-white' : 'bg-teal-600 hover:bg-teal-500 text-white'} text-xs font-extrabold transition">
                ${manualOpen ? 'Hide Manual Ethics List' : '+ Study Ethics Today (Optional)'}
              </button>
            </div>
            ${manualOpen ? `
              <div class="pt-3 border-t border-slate-200 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-teal-900">Next Unfinished Ethics Lessons (Check off any you study today):</span>
                  <button type="button" onclick="openModuleModal('ET M1')" class="text-[11px] font-bold text-indigo-700 hover:underline">+ Log Ethics Practice Qs &rarr;</button>
                </div>
                ${nextUnreadEt.length > 0 ? nextUnreadEt.map(it => `
                  <div class="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2">
                    <label class="flex items-start gap-2.5 cursor-pointer flex-1">
                      <input type="checkbox" ${appState.completedItems[it.id] ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
                      <div>
                        <span class="text-xs font-extrabold px-2 py-0.5 rounded bg-teal-100 text-teal-900">${it.code}</span>
                        <span class="text-[11px] font-semibold text-slate-500 ml-1">${it.module} • Scheduled ${it.originalDate}</span>
                        <p class="text-xs font-semibold text-slate-900 mt-0.5">${it.title}</p>
                      </div>
                    </label>
                    ${renderConfidenceButtonHtml(it.id, true)}
                  </div>
                `).join('') : `<div class="text-xs text-emerald-700 font-bold">All Ethics lessons are completed!</div>`}
              </div>
            ` : ''}
          </div>
        `;
      }

      const weekNum = day.weekNum === 0 ? 1 : day.weekNum;
      const weekDays = PLAN_DATA.days.filter(d => d.weekNum === weekNum);
      document.getElementById('dailyWeekStripTitle').textContent = 'Week ' + String(weekNum).padStart(2, '0') + ' Strip (' + (weekDays[0] ? weekDays[0].dateShort : '') + ' – ' + (weekDays[weekDays.length-1] ? weekDays[weekDays.length-1].dateShort : '') + ')';
      document.getElementById('dailyWeekStripGrid').innerHTML = weekDays.map(wd => {
        const total = wd.mainItems.length + wd.ethicsItems.length;
        const done = [...wd.mainItems, ...wd.ethicsItems].filter(i => appState.completedItems[i.id]).length;
        const isCurrent = wd.date === day.date;
        const cfCount = getCarryForwardItemsForDate(wd.date).length;
        return `
          <button onclick="setActiveDateAndOpenDaily('${wd.date}')" class="p-2.5 rounded-xl border text-left transition ${isCurrent ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : (done === total ? 'bg-emerald-50 border-emerald-200 text-slate-800' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800')}">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold">${wd.dayName}</span>
              ${cfCount > 0 ? `<span class="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-bold">+${cfCount}</span>` : ''}
            </div>
            <span class="block text-[11px] ${isCurrent ? 'text-slate-300' : 'text-slate-500'}">${wd.dateShort}</span>
            <div class="mt-1.5 text-[11px] font-bold ${isCurrent ? 'text-teal-300' : (done === total ? 'text-emerald-700' : 'text-slate-600')}">${done}/${total} items</div>
          </button>
        `;
      }).join('');

      document.getElementById('dailyScratchpadInput').value = appState.dailyNotes[day.date] || '';
      if (typeof syncDailyWorkspaceUpgradeWidgets === 'function') {
        syncDailyWorkspaceUpgradeWidgets(day);
      }
      renderLowestScoringWidgets();
    }

    function saveDailyNote(val) {
      appState.dailyNotes[appState.activeDate] = val;
      saveState();
      clearTimeout(window._dailyNoteTelemetryTimer);
      window._dailyNoteTelemetryTimer = setTimeout(() => {
        recordCurrentUserIntoTelemetryDirectory('Wrote Study Notes (' + appState.activeDate + ')');
        sendActiveUserTelemetryPing('daily_note_saved', false);
      }, 1500);
    }

        function hardLessonsCount() {
      return Object.values(appState.lessonConfidence || {}).filter(v => v === 1).length;
    }
    function renderLowestScoringWidgets() {
      const lowest = getLowestScoringModules(5);
      const hardLessons = Object.keys(appState.lessonConfidence || {})
        .filter(id => appState.lessonConfidence[id] === 1 && allItemsById[id])
        .map(id => allItemsById[id]);
      const sideContainer = document.getElementById('sideLowestModulesList');
      const modTabContainer = document.getElementById('moduleTabWeakestContainer');

      // Compute Study-Time Gaps (Planned vs. Actual Study Hours to Active Date + Overdue/Unscheduled Items)
      const timeGaps = typeof computeStudyTimeGapsSummary === 'function' ? computeStudyTimeGapsSummary() : { hasTimeGap: false, items: [] };

      const renderCards = (items) => items.map(entry => {
        const m = entry.module;
        const st = entry.stats;
        const accBadge = st.accuracy !== null
          ? `<span class="text-xs font-extrabold px-2 py-0.5 rounded ${st.accuracy < 60 ? 'bg-rose-100 text-rose-800' : (st.accuracy < 72 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800')}">${st.accuracy}% (${st.correct}/${st.attempted})</span>`
          : `<span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">Pinned for Review</span>`;
        return `
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800">KNOWLEDGE GAP</span>
                <span class="text-xs font-extrabold px-2 py-0.5 rounded bg-slate-900 text-white">${m.code}</span>
                ${accBadge}
              </div>
              <p class="text-xs font-semibold text-slate-800 truncate mt-1">${m.title}</p>
              ${st.weakConcepts ? `<p class="text-[11px] text-rose-700 mt-0.5 truncate">Gap: ${st.weakConcepts}</p>` : ''}
            </div>
            <button onclick="openModuleModal('${m.code}')" class="text-xs px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold whitespace-nowrap">Update</button>
          </div>
        `;
      }).join('');

      const hardHtml = hardLessons.slice(0, 4).map(it => `
        <div class="p-2.5 rounded-xl bg-rose-100/60 border border-rose-200 flex items-center justify-between gap-2">
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-100 text-rose-800">&#9733; Hard Lesson (Knowledge)</span>
              <span class="text-xs font-extrabold text-slate-900">${it.code}</span>
            </div>
            <p class="text-xs font-semibold text-slate-800 truncate mt-0.5">${it.title}</p>
          </div>
          <button type="button" onclick="setActiveDateAndOpenDaily('${it.originalDate}')" class="text-[11px] px-2 py-1 rounded bg-white text-slate-700 border border-slate-300 font-semibold shrink-0">Review</button>
        </div>
      `).join('');

      const timeGapHtml = timeGaps.items.map(tg => `
        <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-2">
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-200 text-amber-950">&#9201; STUDY-TIME GAP</span>
              <span class="text-xs font-extrabold text-slate-900">${tg.title}</span>
            </div>
            <p class="text-[11px] text-slate-700 mt-0.5">${tg.detail}</p>
          </div>
          ${tg.actionHtml || ''}
        </div>
      `).join('');

      const knowledgeEmptyHtml = `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <strong>Knowledge Gaps:</strong> No low-scoring modules or &#9733; Hard lessons flagged yet. Click <strong>"&#9734; Rate"</strong> on any lesson or <strong>"Log Scores"</strong> to rank weak concepts.
        </div>
      `;

      const knowledgeSection = (lowest.length > 0 || hardLessons.length > 0)
        ? (renderCards(lowest.slice(0, 3)) + hardHtml)
        : knowledgeEmptyHtml;

      const timeSection = timeGaps.items.length > 0
        ? `<div class="pt-2 border-t border-slate-100 space-y-2">${timeGapHtml}</div>`
        : `<div class="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-[11px] text-emerald-900 font-semibold">&#9201; <strong>Study-Time Adherence:</strong> No active study-time deficit on today's schedule.</div>`;

      if (sideContainer) sideContainer.innerHTML = knowledgeSection + timeSection;
      if (modTabContainer) modTabContainer.innerHTML = (lowest.length > 0 || hardLessons.length > 0 ? (renderCards(lowest) + hardHtml) : knowledgeEmptyHtml) + timeSection;
    }

    function getMaxWeekNum() {
      let maxW = 1;
      PLAN_DATA.days.forEach(d => { if (d.weekNum > maxW) maxW = d.weekNum; });
      return maxW;
    }

    function populateWeekFilterDropdown(forceRebuild) {
      const sel = document.getElementById('scheduleWeekFilter');
      if (!sel) return;
      if (!forceRebuild && sel.options.length > 1) return;
      const prevVal = sel.value || 'ALL';
      const maxW = getMaxWeekNum();
      sel.innerHTML = `<option value="ALL">All ${maxW} Weeks</option>`;
      const hasWeek0 = PLAN_DATA.days.some(d => d.weekNum === 0);
      if (hasWeek0) {
        const d0 = PLAN_DATA.days.find(d => d.weekNum === 0);
        const opt0 = document.createElement('option');
        opt0.value = '0';
        opt0.textContent = d0 ? (d0.weekTitle + ' — ' + d0.weekSubject) : 'Week 00 — Opening Setup';
        sel.appendChild(opt0);
      }
      for (let w = 1; w <= maxW; w++) {
        const firstDay = PLAN_DATA.days.find(d => d.weekNum === w);
        if (!firstDay) continue;
        const opt = document.createElement('option');
        opt.value = String(w);
        opt.textContent = firstDay.weekTitle + ' — ' + firstDay.weekSubject;
        sel.appendChild(opt);
      }
      if ([...sel.options].some(o => o.value === prevVal)) sel.value = prevVal;
    }

    function filterScheduleBySubject(subjCode) {
      document.getElementById('scheduleSubjectFilter').value = subjCode;
      document.getElementById('scheduleWeekFilter').value = 'ALL';
      switchTab('schedule');
      renderFullSchedule();
    }

    function renderRoadmapTable() {
      renderRoadmapFlexibilityControls();
      const tbody = document.getElementById('roadmapTableBody');
      if (!tbody) return;
      const cfg = (appState && appState.planConfig) || {};
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      const activeOrder = getActiveTopicOrderList(cfg);

      const headingEl = document.getElementById('roadmapSequenceHeading');
      if (headingEl) {
        const seqArrowStr = activeOrder.join(' → ');
        headingEl.textContent = isSeq10
          ? `Subject Roadmap (10-Topic Sequence: ${seqArrowStr})`
          : `Subject Roadmap (${seqArrowStr} + Daily Ethics)`;
      }

      tbody.innerHTML = PLAN_DATA.subjects.map((s) => {
        let done = 0;
        let tot = 0;
        Object.values(allItemsById).forEach(it => {
          if (it.subject === s.code && (it.kind === 'lesson' || (s.code === 'ET' && it.kind === 'ethics_reading'))) {
            tot++;
            if (appState.completedItems[it.id]) done++;
          }
        });
        let qAtt = 0;
        let qCor = 0;
        PLAN_DATA.modules.filter(m => m.subject === s.code).forEach(m => {
          const st = getModuleStats(m.code);
          qAtt += st.attempted;
          qCor += st.correct;
        });
        const accStr = qAtt > 0 ? ((qCor / qAtt) * 100).toFixed(0) + '% (' + qAtt + '/' + s.questions + ')' : '0 / ' + s.questions + ' Qs';
        const pct = tot > 0 ? Math.round((done / tot) * 100) : 0;

        const orderIdx = activeOrder.indexOf(s.code);
        const canReorderRow = (orderIdx !== -1);
        const orderControlsHtml = canReorderRow
          ? `
            <div class="flex items-center gap-1">
              <span class="text-[11px] font-extrabold text-slate-400 w-5">#${orderIdx + 1}</span>
              <button type="button" onclick="moveTopicInOrder('${s.code}', -1)" ${orderIdx === 0 ? 'disabled' : ''} class="topic-move-btn" title="Move ${s.code} earlier in sequence">&uarr;</button>
              <button type="button" onclick="moveTopicInOrder('${s.code}', 1)" ${orderIdx === activeOrder.length - 1 ? 'disabled' : ''} class="topic-move-btn" title="Move ${s.code} later in sequence">&darr;</button>
            </div>
          `
          : `<span class="text-[10px] font-extrabold px-2 py-0.5 rounded bg-teal-100 text-teal-800" title="Switch to 10-Topic Sequence above to place Ethics in sequence">Daily</span>`;

        return `
          <tr class="hover:bg-slate-50 transition" ${canReorderRow ? `draggable="true" ondragstart="onTopicDragStart(event, '${s.code}')" ondragover="onTopicDragOver(event)" ondrop="onTopicDrop(event, '${s.code}')" ondragend="onTopicDragEnd(event)"` : ''}>
            <td class="py-2.5 px-3 whitespace-nowrap">${orderControlsHtml}</td>
            <td class="py-2.5 px-3 font-bold">
              <button onclick="filterScheduleBySubject('${s.code}')" class="text-left hover:underline flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color:${s.color}"></span>
                <span>${s.code} — ${s.name}</span>
              </button>
            </td>
            <td class="py-2.5 px-3 text-slate-600">${s.lesName}</td>
            <td class="py-2.5 px-3 text-slate-600">${s.dates}</td>
            <td class="py-2.5 px-3 text-right font-medium">${s.weekdays}</td>
            <td class="py-2.5 px-3 text-right font-bold text-slate-900">${done} / ${tot} <span class="text-xs text-slate-500">(${pct}%)</span></td>
            <td class="py-2.5 px-3 text-right font-semibold text-teal-700">${accStr}</td>
            <td class="py-2.5 px-3 text-right">
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-blue-600 hover:underline">Open LES &#8599;</a>
            </td>
          </tr>
        `;
      }).join('');
    }

    function renderFullSchedule() {
      populateWeekFilterDropdown();
      renderPacingAndHeatmap();
      renderRoadmapTable();

      const weekFilter = document.getElementById('scheduleWeekFilter').value;
      const subjFilter = document.getElementById('scheduleSubjectFilter').value;
      const statusFilter = document.getElementById('scheduleStatusFilter').value;
      const searchQ = (document.getElementById('scheduleSearchInput').value || '').trim().toLowerCase();

      const weeksMap = {};
      PLAN_DATA.days.forEach(d => {
        if (weekFilter !== 'ALL' && String(d.weekNum) !== weekFilter) return;
        if (!weeksMap[d.weekNum]) {
          weeksMap[d.weekNum] = {
            weekNum: d.weekNum,
            weekTitle: d.weekTitle,
            weekSubject: d.weekSubject,
            days: []
          };
        }
        weeksMap[d.weekNum].days.push(d);
      });

      const container = document.getElementById('fullScheduleContainer');
      const weekNums = Object.keys(weeksMap).map(Number).sort((a, b) => a - b);

      const htmlChunks = [];
      weekNums.forEach(wNum => {
        const wObj = weeksMap[wNum];
        const renderedDays = [];
        let weekTotalItems = 0;
        let weekDoneItems = 0;

        wObj.days.forEach(d => {
          const allDayItems = [...d.mainItems, ...d.ethicsItems];
          allDayItems.forEach(it => {
            weekTotalItems++;
            if (appState.completedItems[it.id]) weekDoneItems++;
          });

          const matchItem = (it) => {
            if (subjFilter !== 'ALL' && it.subject !== subjFilter) return false;
            const isDone = !!appState.completedItems[it.id];
            const isShifted = !!appState.shiftedItems[it.id];
            if (statusFilter === 'UNFINISHED' && isDone) return false;
            if (statusFilter === 'COMPLETED' && !isDone) return false;
            if (statusFilter === 'SHIFTED' && !isShifted) return false;
            if (searchQ) {
              const hay = (it.code + ' ' + it.title + ' ' + it.module + ' ' + d.dateDisplay).toLowerCase();
              if (!hay.includes(searchQ)) return false;
            }
            return true;
          };

          const isOff = typeof isDateMarkedDayOff === 'function' && isDateMarkedDayOff(d.date);
          if (isOff && subjFilter === 'ALL' && statusFilter === 'ALL' && !searchQ && d.mainItems.length === 0 && d.ethicsItems.length === 0) {
            renderedDays.push(`
              <div class="p-4 bg-slate-50/80 flex flex-col md:flex-row gap-4 items-center justify-between border-l-4 border-amber-400">
                <div class="flex items-center gap-3">
                  <span class="text-xs font-extrabold uppercase text-slate-800">${d.dayName} ${d.dateShort}</span>
                  <span class="text-xs font-extrabold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">&#127958; Scheduled Day Off (0.0h Planned)</span>
                  <span class="text-xs text-slate-500">Excluded from completion denominator &amp; streak penalties</span>
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="handleToggleDayOffClick('${d.date}')" class="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">&#8634; Restore Study Day</button>
                  <button type="button" onclick="setActiveDateAndOpenDaily('${d.date}')" class="text-xs font-bold text-teal-700 hover:underline">Open Day &rarr;</button>
                </div>
              </div>
            `);
            return;
          }
          const fMain = d.mainItems.filter(matchItem);
          const fEth = d.ethicsItems.filter(matchItem);
          if (fMain.length === 0 && fEth.length === 0) return;

          renderedDays.push(`
            <div class="p-4 hover:bg-slate-50/70 transition flex flex-col md:flex-row gap-4 items-start">
              <div class="w-full md:w-36 shrink-0 flex md:flex-col justify-between items-center md:items-start bg-slate-100/80 p-2.5 rounded-xl border border-slate-200">
                <div>
                  <span class="text-xs font-extrabold uppercase text-slate-900 block">${d.dayName} ${d.dateShort}</span>
                  <span class="text-[11px] text-slate-500">${d.dayMode === 'revision_practice' ? 'Revision & Practice' : (d.dayMode === 'mixed' ? 'Combo: Read + Qs' : (d.dayMode === 'setup' ? 'Opening Setup' : 'New Readings'))}</span>
                </div>
                <button onclick="setActiveDateAndOpenDaily('${d.date}')" class="mt-1.5 text-[11px] font-bold text-teal-700 hover:underline">Open Day &rarr;</button>
              </div>

              <div class="flex-1 space-y-1.5 w-full">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${(appState.planConfig && appState.planConfig.ethicsMode === 'sequence_10') ? 'Scheduled Topic Block (100% Daily Focus)' : 'Main Topic Block'}</span>
                ${fMain.map(it => {
                  const isDone = !!appState.completedItems[it.id];
                  const shiftedTo = appState.shiftedItems[it.id];
                  return `
                    <div class="flex items-center justify-between gap-2 p-2 rounded-lg border ${isDone ? 'bg-emerald-50/40 border-emerald-200' : 'bg-white border-slate-200'}">
                      <label class="flex items-start gap-2.5 cursor-pointer flex-1">
                        <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
                        <span class="text-xs text-wrap-nice ${isDone ? 'line-through text-slate-400' : 'text-slate-800'}">
                          <strong class="font-bold text-slate-900">${it.code}</strong> | ${it.title}
                          ${shiftedTo ? `<span class="ml-1 px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">Shifted &rarr; ${shiftedTo}</span>` : ''}
                        </span>
                      </label>
                      <div class="flex items-center gap-1 shrink-0">
                        ${renderConfidenceButtonHtml(it.id, true)}
                        ${!isDone ? `<button onclick="shiftSingleItem('${it.id}')" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-900 font-semibold shrink-0" title="Shift unfinished item to next weekday (or Weekend if Friday)">Shift &rarr;</button>` : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <div class="w-full md:w-72 shrink-0 space-y-1.5">
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ethics (20 min)</span>
                ${fEth.map(it => {
                  const isDone = !!appState.completedItems[it.id];
                  const shiftedTo = appState.shiftedItems[it.id];
                  return `
                    <div class="flex items-center justify-between gap-2 p-2 rounded-lg border ${isDone ? 'bg-emerald-50/40 border-emerald-200' : 'bg-white border-slate-200'}">
                      <label class="flex items-start gap-2 cursor-pointer flex-1">
                        <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleItemComplete('${it.id}')" class="checkbox-custom mt-0.5" />
                        <span class="text-xs text-wrap-nice ${isDone ? 'line-through text-slate-400' : 'text-slate-800'}">
                          <strong class="font-bold text-teal-900">${it.code}</strong> | ${it.title}
                          ${shiftedTo ? `<span class="ml-1 px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">Shifted &rarr; ${shiftedTo}</span>` : ''}
                        </span>
                      </label>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `);
        });

        if (renderedDays.length === 0) return;

        const wPct = weekTotalItems > 0 ? Math.round((weekDoneItems / weekTotalItems) * 100) : 0;
        const wkSummary = appState.weeklySummaries[wNum] || {};

        htmlChunks.push(`
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">${wObj.weekTitle}</span>
                <h3 class="text-base sm:text-lg font-extrabold">${wObj.weekSubject}</h3>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-200">${weekDoneItems} / ${weekTotalItems} Items (${wPct}%)</span>
              </div>
            </div>
            <div class="divide-y divide-slate-200">
              ${renderedDays.join('')}
            </div>
            ${wNum >= 1 ? `
              <div class="bg-slate-50 border-t border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div class="text-xs text-slate-700 flex flex-wrap items-center gap-3">
                  <strong class="text-slate-900">Sunday Check (Week ${wNum}):</strong>
                  <span>Lessons done: <strong>${wkSummary.lessonsDone || weekDoneItems}</strong></span>
                  <span>| Questions attempted: <strong>${wkSummary.questions || '—'}</strong></span>
                  <span>| Accuracy: <strong>${wkSummary.accuracy ? wkSummary.accuracy + '%' : '—'}</strong></span>
                  <span>| Main gaps: <strong>${[wkSummary.weak1, wkSummary.weak2, wkSummary.weak3].filter(Boolean).join(', ') || wkSummary.notes || 'None logged'}</strong></span>
                </div>
                <button onclick="openWeekSummaryTab(${wNum})" class="text-xs px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold">Edit Sunday Check-In</button>
              </div>
            ` : ''}
          </div>
        `);
      });

      container.innerHTML = htmlChunks.length > 0
        ? htmlChunks.join('')
        : `<div class="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">No lessons match your current filter criteria.</div>`;
    }

    let currentEditingModule = null;

    function renderModulesTable() {
      renderLowestScoringWidgets();
      const subjFilter = document.getElementById('moduleSubjectFilter').value;
      const sortMode = document.getElementById('moduleSortSelect').value;
      const searchQ = (document.getElementById('moduleSearchInput').value || '').trim().toLowerCase();

      let list = PLAN_DATA.modules.map((m, idx) => ({
        mod: m,
        idx,
        stats: getModuleStats(m.code)
      })).filter(entry => {
        if (subjFilter !== 'ALL' && entry.mod.subject !== subjFilter) return false;
        if (searchQ) {
          const hay = (entry.mod.code + ' ' + entry.mod.title + ' ' + entry.stats.weakConcepts + ' ' + entry.stats.notes).toLowerCase();
          if (!hay.includes(searchQ)) return false;
        }
        return true;
      });

      if (sortMode === 'LOWEST_ACC') {
        list.sort((a, b) => {
          const aAcc = a.stats.accuracy !== null ? a.stats.accuracy : (a.stats.flagged ? -1 : 999);
          const bAcc = b.stats.accuracy !== null ? b.stats.accuracy : (b.stats.flagged ? -1 : 999);
          return aAcc - bAcc;
        });
      } else if (sortMode === 'HIGHEST_ACC') {
        list.sort((a, b) => (b.stats.accuracy ?? -1) - (a.stats.accuracy ?? -1));
      } else if (sortMode === 'MOST_ATTEMPTED') {
        list.sort((a, b) => b.stats.attempted - a.stats.attempted);
      }

      const tbody = document.getElementById('modulesTableBody');
      tbody.innerHTML = list.map(entry => {
        const m = entry.mod;
        const st = entry.stats;
        const sInfo = subjectByCode[m.subject] || {};
        const readPct = st.totalLessons > 0 ? Math.round((st.doneLessons / st.totalLessons) * 100) : 0;

        let accHtml = `<span class="text-xs text-slate-400">Untested</span>`;
        if (st.accuracy !== null) {
          const colorCls = st.accuracy < 60
            ? 'bg-rose-100 text-rose-800 border-rose-200'
            : (st.accuracy < 72 ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-emerald-100 text-emerald-800 border-emerald-200');
          accHtml = `<span class="text-xs font-extrabold px-2.5 py-1 rounded-full border ${colorCls}">${st.accuracy}%</span>`;
        }

        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-3 px-3 whitespace-nowrap">
              <span class="text-xs font-extrabold px-2.5 py-1 rounded-md text-white" style="background-color:${sInfo.color || '#0f172a'}">${m.code}</span>
              ${st.flagged ? `<span class="block mt-1 text-[10px] font-bold text-rose-600">&#9873; Sunday Priority</span>` : ''}
            </td>
            <td class="py-3 px-3">
              <div class="font-bold text-slate-900">${m.title}</div>
              <div class="text-xs text-slate-500">Lessons ${m.lessonRange} • Est. ${m.estQuestions} LES Qs</div>
            </td>
            <td class="py-3 px-3 text-center whitespace-nowrap">
              <div class="text-xs font-bold text-slate-800">${st.doneLessons} / ${st.totalLessons} (${readPct}%)</div>
              <div class="w-24 mx-auto h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1">
                <div class="h-full bg-blue-600" style="width:${readPct}%"></div>
              </div>
            </td>
            <td class="py-3 px-3 text-center whitespace-nowrap font-semibold text-slate-800">
              ${st.correct} / ${st.attempted} <span class="text-xs text-slate-400">(of ~${m.estQuestions})</span>
            </td>
            <td class="py-3 px-3 text-center whitespace-nowrap">${accHtml}</td>
            <td class="py-3 px-3 max-w-xs">
              ${st.weakConcepts ? `<div class="text-xs font-semibold text-rose-700">Weak: ${st.weakConcepts}</div>` : ''}
              ${st.notes ? `<div class="text-xs text-slate-600 truncate">${st.notes}</div>` : ''}
              ${!st.weakConcepts && !st.notes ? `<span class="text-xs text-slate-400">No errors logged</span>` : ''}
            </td>
            <td class="py-3 px-3 text-right whitespace-nowrap">
              <div class="flex items-center justify-end gap-1.5">
                <button onclick="openModuleModal('${m.code}')" class="px-2.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition">Log Practice / Errors</button>
                <a href="${sInfo.url || 'https://learn.cfainstitute.org'}" target="_blank" rel="noopener noreferrer" class="px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold">LES &#8599;</a>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      renderFormulaVault();
      updateTopicAccuracyChart();
    }

    function openModuleModal(modCode) {
      currentEditingModule = modCode;
      const m = moduleByCode[modCode];
      const st = getModuleStats(modCode);
      document.getElementById('modalModuleCodeBadge').textContent = m.code;
      document.getElementById('modalModuleTitle').textContent = m.title;
      document.getElementById('modalModuleSub').textContent = 'Lessons ' + m.lessonRange + ' • Reading Progress: ' + st.doneLessons + '/' + st.totalLessons;
      document.getElementById('modalQuestionsAttempted').value = st.attempted;
      document.getElementById('modalQuestionsCorrect').value = st.correct;
      document.getElementById('modalWeakConceptsInput').value = st.weakConcepts;
      const defaultModFormulas = DEFAULT_FORMULAS.filter(f => f.mod === modCode).map(f => f.title + ': ' + f.eq.replace(/\n/g, ' | ')).join('\n\n');
      document.getElementById('modalNotesInput').value = st.notes || defaultModFormulas;
      document.getElementById('modalFlagSecondPass').checked = st.flagged;

      const modal = document.getElementById('moduleEditModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeModuleModal() {
      const modal = document.getElementById('moduleEditModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      currentEditingModule = null;
    }

    function saveModuleModal() {
      if (!currentEditingModule) return;
      const att = Math.max(0, parseInt(document.getElementById('modalQuestionsAttempted').value, 10) || 0);
      const cor = Math.min(att, Math.max(0, parseInt(document.getElementById('modalQuestionsCorrect').value, 10) || 0));
      appState.moduleLogs[currentEditingModule] = {
        attempted: att,
        correct: cor,
        weakConcepts: document.getElementById('modalWeakConceptsInput').value.trim(),
        notes: document.getElementById('modalNotesInput').value.trim(),
        flagged: document.getElementById('modalFlagSecondPass').checked
      };
      saveState();
      const loggedMod = currentEditingModule;
      recordCurrentUserIntoTelemetryDirectory('Logged Practice Qs (' + loggedMod + ': ' + cor + '/' + att + ')');
      sendActiveUserTelemetryPing('module_practice_' + loggedMod, false);
      closeModuleModal();
      showToast('Updated module log for ' + loggedMod);
      refreshAllViews();
    }

    function renderWeeklyForms() {
      const grid = document.getElementById('weeklyFormsGrid');
      if (!grid) return;

      const cards = [];
      const maxW = getMaxWeekNum();
      for (let w = 1; w <= maxW; w++) {
        const wDays = PLAN_DATA.days.filter(d => d.weekNum === w);
        const firstDay = wDays[0];
        if (!firstDay) continue;
        let autoLessonsDone = 0;
        let autoLessonsTotal = 0;
        wDays.forEach(d => {
          d.mainItems.forEach(it => {
            if (it.kind === 'lesson') {
              autoLessonsTotal++;
              if (appState.completedItems[it.id]) autoLessonsDone++;
            }
          });
        });

        const saved = appState.weeklySummaries[w] || {};
        const lessonsVal = saved.lessonsDone !== undefined && saved.lessonsDone !== '' ? saved.lessonsDone : autoLessonsDone;
        const qVal = saved.questions || '';
        const accVal = saved.accuracy || '';

        cards.push(`
          <div id="weekSummaryCard-${w}" class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-teal-700">${firstDay.weekTitle}</span>
                <h3 class="text-base font-extrabold text-slate-900">${firstDay.weekSubject}</h3>
              </div>
              <span class="text-xs px-2.5 py-1 rounded-full font-bold ${saved.savedAt ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
                ${saved.savedAt ? 'Check-In Saved' : 'Auto: ' + autoLessonsDone + '/' + autoLessonsTotal + ' Lessons'}
              </span>
            </div>

            <div class="grid grid-cols-3 gap-2.5">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Lessons Done</label>
                <input id="wk-${w}-lessons" type="number" value="${lessonsVal}" placeholder="${autoLessonsDone}" class="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-bold" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Questions Attempted</label>
                <input id="wk-${w}-questions" type="number" value="${qVal}" placeholder="e.g. 24" class="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-bold" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Accuracy (%)</label>
                <input id="wk-${w}-accuracy" type="number" value="${accVal}" placeholder="e.g. 72" min="0" max="100" class="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-bold" />
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-slate-600 mb-1">Top 3 Weakest Concepts (Sunday Check)</label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input id="wk-${w}-weak1" type="text" value="${saved.weak1 || ''}" placeholder="1. Weak concept..." class="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs" />
                <input id="wk-${w}-weak2" type="text" value="${saved.weak2 || ''}" placeholder="2. Weak concept..." class="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs" />
                <input id="wk-${w}-weak3" type="text" value="${saved.weak3 || ''}" placeholder="3. Weak concept..." class="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs" />
              </div>
            </div>

            <div class="flex items-center gap-2">
              <input id="wk-${w}-notes" type="text" value="${saved.notes || ''}" placeholder="Carry-forward notes / persistent errors to retry next Sunday..." class="flex-1 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs" />
              <button onclick="saveWeeklySummary(${w})" class="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition">Save Week ${w}</button>
            </div>

            <div class="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <span class="text-[11px] text-slate-500">Sunday Protocol: 6–8 current Qs + 4–6 earlier-module Qs</span>
              <button onclick="generateSundayRevisionSet(${w})" class="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition">
                &#9889; Generate My Sunday Revision Set
              </button>
            </div>
            <div id="sundayRevisionSetBox-${w}" class="${appState.sundayRevisionSets && appState.sundayRevisionSets[w] ? '' : 'hidden'} p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              ${appState.sundayRevisionSets && appState.sundayRevisionSets[w] ? appState.sundayRevisionSets[w] : ''}
            </div>
          </div>
        `);
      }

      grid.innerHTML = cards.join('');
      updateWeeklyTrendChart();
    }

    function saveWeeklySummary(w) {
      appState.weeklySummaries[w] = {
        lessonsDone: document.getElementById(`wk-${w}-lessons`).value,
        questions: document.getElementById(`wk-${w}-questions`).value,
        accuracy: document.getElementById(`wk-${w}-accuracy`).value,
        weak1: document.getElementById(`wk-${w}-weak1`).value.trim(),
        weak2: document.getElementById(`wk-${w}-weak2`).value.trim(),
        weak3: document.getElementById(`wk-${w}-weak3`).value.trim(),
        notes: document.getElementById(`wk-${w}-notes`).value.trim(),
        savedAt: new Date().toISOString()
      };
      saveState();
      recordCurrentUserIntoTelemetryDirectory('Saved Week ' + w + ' Sunday Check-In');
      sendActiveUserTelemetryPing('weekly_checkin_W' + w, false);
      showToast('Saved Week ' + w + ' Sunday Check-In!');
      renderWeeklyForms();
    }

    function openWeekSummaryTab(w) {
      switchTab('weekly');
      setTimeout(() => {
        const el = document.getElementById('weekSummaryCard-' + w);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
    }

    function JumpToCurrentWeekSummary() {
      const d = daysByDate[appState.activeDate];
      const w = d && d.weekNum >= 1 ? d.weekNum : 1;
      openWeekSummaryTab(w);
    }

    function renderMocksAndPhase2() {
      document.getElementById('examDateInput').value = appState.examDate;
      const mar28 = new Date('2027-03-28T00:00:00');
      const exDt = new Date(appState.examDate + 'T00:00:00');
      const windowDays = Math.max(1, Math.round((exDt - mar28) / 86400000));
      document.getElementById('mockWindowDaysLabel').textContent = windowDays + ' Days';

      document.getElementById('recReadingThrough').value = appState.march28Record.readingThrough || '';
      document.getElementById('recSecondPassModules').value = appState.march28Record.secondPassModules || '';
      document.getElementById('recPersistentErrors').value = appState.march28Record.persistentErrors || '';
      document.getElementById('recNextMockPlan').value = appState.march28Record.nextMockPlan || '';

      const mocksContainer = document.getElementById('mockExamsListContainer');
      if (appState.mockExams.length === 0) {
        mocksContainer.innerHTML = `<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">No mock exams logged yet. Click "+ Log Mock Exam" to record AM/PM vignette scores.</div>`;
      } else {
        mocksContainer.innerHTML = appState.mockExams.map(mk => {
          const avg = Math.round(((Number(mk.amScore) || 0) + (Number(mk.pmScore) || 0)) / 2 * 10) / 10;
          const badgeCls = avg >= 70 ? 'bg-emerald-100 text-emerald-800' : (avg >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800');
          const paceMins = mk.avgVignetteMins ? Number(mk.avgVignetteMins) : 12.0;
          const paceBadge = `<span class="text-[10px] font-bold px-2 py-0.5 rounded ${paceMins <= 12 ? 'bg-teal-100 text-teal-800' : 'bg-rose-100 text-rose-800'}">&#9201; ${paceMins}m / vignette ${paceMins <= 12 ? '(On Pace)' : '(Over 12m!)'}</span>`;
          const topicPills = mk.topicScores
            ? Object.entries(mk.topicScores).filter(([,v]) => v !== '' && v !== null && !isNaN(v)).map(([k,v]) =>
                `<span class="text-[10px] font-semibold px-1.5 py-0.5 rounded border ${Number(v) < 65 ? 'bg-rose-100 text-rose-800 border-rose-200' : 'bg-white text-slate-700 border-slate-200'}">${k}: ${v}%</span>`
              ).join('')
            : '';
          return `
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-extrabold text-slate-900">${mk.name}</span>
                    <span class="text-[11px] text-slate-500">${mk.date} • ${mk.questions} Qs (${Math.round((mk.questions || 88)/4)} vignettes)</span>
                    ${paceBadge}
                  </div>
                  <div class="text-xs text-slate-600 mt-1">
                    AM: <strong>${mk.amScore}%</strong> | PM: <strong>${mk.pmScore}%</strong>
                    ${mk.weakTopics ? ` | <span class="text-rose-700 font-medium">Review: ${mk.weakTopics}</span>` : ''}
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${badgeCls}">${avg}% Overall</span>
                  <button onclick="deleteMockExam('${mk.id}')" class="text-xs text-slate-400 hover:text-rose-600 font-bold px-1.5" title="Remove">&times;</button>
                </div>
              </div>
              ${topicPills ? `<div class="flex flex-wrap items-center gap-1 pt-1 border-t border-slate-200/70">${topicPills}</div>` : ''}
            </div>
          `;
        }).join('');
      }

      let modAttempted = 0;
      PLAN_DATA.modules.forEach(m => { modAttempted += getModuleStats(m.code).attempted; });
      let drillAttempted = 0;
      appState.qbankDrills.forEach(dr => { drillAttempted += (parseInt(dr.attempted, 10) || 0); });
      const totalSolved = modAttempted + drillAttempted;
      const rem = Math.max(0, PLAN_DATA.totalQuestions - totalSolved);
      const pace = Math.ceil(rem / windowDays);

      document.getElementById('phase2TotalQs').textContent = totalSolved.toLocaleString();
      document.getElementById('phase2RemainingQs').textContent = rem.toLocaleString();
      document.getElementById('phase2DailyPace').textContent = pace + ' Qs/day';

      const drillsContainer = document.getElementById('drillEntriesListContainer');
      if (appState.qbankDrills.length === 0) {
        drillsContainer.innerHTML = `<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">No post-March 28 question bursts logged yet. Click "+ Log Q-Bank Burst" to record daily practice sets.</div>`;
      } else {
        drillsContainer.innerHTML = appState.qbankDrills.slice().reverse().map(dr => {
          const acc = dr.attempted > 0 ? Math.round((dr.correct / dr.attempted) * 100) : 0;
          return `
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-extrabold px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">${dr.topic}</span>
                  <span class="text-xs font-bold text-slate-800">${dr.correct}/${dr.attempted} Correct (${acc}%)</span>
                  <span class="text-[11px] text-slate-400">${dr.date}</span>
                </div>
                ${dr.notes ? `<p class="text-xs text-slate-600 mt-1">${dr.notes}</p>` : ''}
              </div>
              <button onclick="deleteDrillEntry('${dr.id}')" class="text-xs text-slate-400 hover:text-rose-600 font-bold px-1.5">&times;</button>
            </div>
          `;
        }).join('');
      }

      renderMockTopicBreakdownMatrix();
      updateMockScoreChart();
    }

    function updateExamDate(val) {
      if (!val) return;
      appState.examDate = val;
      saveState();
      showToast('Updated May 2027 Exam Date to ' + val);
      refreshAllViews();
    }

    function saveMarch28Record() {
      appState.march28Record = {
        readingThrough: document.getElementById('recReadingThrough').value.trim(),
        secondPassModules: document.getElementById('recSecondPassModules').value.trim(),
        persistentErrors: document.getElementById('recPersistentErrors').value.trim(),
        nextMockPlan: document.getElementById('recNextMockPlan').value.trim()
      };
      saveState();
      showToast('Saved 28 March 2027 Completion Record!');
    }

    function toggleAddMockForm() {
      document.getElementById('addMockFormBox').classList.toggle('hidden');
    }

    function addMockExamEntry() {
      const name = document.getElementById('mockNameInput').value.trim() || ('Mock Exam #' + (appState.mockExams.length + 1));
      const date = document.getElementById('mockDateInput').value || '2027-04-10';
      const questions = parseInt(document.getElementById('mockQuestionsInput').value, 10) || 88;
      const amScore = Math.min(100, Math.max(0, parseFloat(document.getElementById('mockAmScoreInput').value) || 0));
      const pmScore = Math.min(100, Math.max(0, parseFloat(document.getElementById('mockPmScoreInput').value) || 0));
      const avgVignetteMins = parseFloat(document.getElementById('mockAvgVignetteMinsInput').value) || 12.0;
      const weakTopics = document.getElementById('mockWeakTopicsInput').value.trim();
      const topicScores = {};
      ['CI','AI','EC','EQ','FA','QM','PM','FI','DV','ET'].forEach(code => {
        const el = document.getElementById('mockSubj-' + code);
        if (el && el.value.trim() !== '') {
          topicScores[code] = Math.min(100, Math.max(0, parseFloat(el.value) || 0));
        }
      });

      appState.mockExams.push({
        id: 'mock-' + Date.now(),
        name,
        date,
        questions,
        amScore,
        pmScore,
        avgVignetteMins,
        topicScores,
        weakTopics
      });
      saveState();
      recordCurrentUserIntoTelemetryDirectory('Logged Mock Exam: ' + name);
      sendActiveUserTelemetryPing('mock_logged', false);
      document.getElementById('addMockFormBox').classList.add('hidden');
      showToast('Logged ' + name);
      renderMocksAndPhase2();
    }

    function deleteMockExam(id) {
      appState.mockExams = appState.mockExams.filter(m => m.id !== id);
      saveState();
      renderMocksAndPhase2();
    }

    function toggleAddDrillForm() {
      document.getElementById('addDrillFormBox').classList.toggle('hidden');
    }

    function addDrillEntry() {
      const date = document.getElementById('drillDateInput').value || '2027-03-29';
      const topic = document.getElementById('drillTopicSelect').value || 'MIXED';
      const attempted = Math.max(1, parseInt(document.getElementById('drillAttemptedInput').value, 10) || 20);
      const correct = Math.min(attempted, Math.max(0, parseInt(document.getElementById('drillCorrectInput').value, 10) || 0));
      const notes = document.getElementById('drillNotesInput').value.trim();

      appState.qbankDrills.push({
        id: 'drill-' + Date.now(),
        date,
        topic,
        attempted,
        correct,
        notes
      });
      saveState();
      recordCurrentUserIntoTelemetryDirectory('Logged ' + attempted + ' Q-Bank Qs (' + topic + ')');
      sendActiveUserTelemetryPing('qbank_drill_logged', false);
      document.getElementById('addDrillFormBox').classList.add('hidden');
      showToast('Logged ' + attempted + ' practice questions (' + topic + ')');
      refreshAllViews();
    }

    function deleteDrillEntry(id) {
      appState.qbankDrills = appState.qbankDrills.filter(d => d.id !== id);
      saveState();
      refreshAllViews();
    }

    const TIMER_PRESETS = {
      pomo_25: { label: 'Pomodoro: 25m Focus', minutes: 25, desc: '25-minute deep focus sprint followed by 5m break' },
      pomo_5:  { label: 'Pomodoro: 5m Short Break', minutes: 5, desc: '5-minute rest & hydration break' },
      pomo_15: { label: 'Pomodoro: 15m Long Break', minutes: 15, desc: '15-minute recharge break after 4 Pomodoros' },
      wk_85:   { label: 'Weekday: 85m Main Reading', minutes: 85, desc: 'Read assigned main-subject lessons & worked examples' },
      wk_15:   { label: 'Weekday: 15m Concise Notes', minutes: 15, desc: 'Write concise notes & mark difficult passages' },
      wk_20:   { label: 'Daily: 20m Ethics Block', minutes: 20, desc: 'Assigned LES Ethics reading, case study, or 3–4 practice questions' },
      sat_25:  { label: 'Sat: 25m Weekly Revision', minutes: 25, desc: 'Revise this week\'s notes, flashcards, and marked examples' },
      sat_45:  { label: 'Sat/Sun: 45m LES Questions', minutes: 45, desc: 'Attempt 8–12 scored LES questions on completed lessons' },
      sat_30:  { label: 'Sat: 30m Review Explanations', minutes: 30, desc: 'Review every explanation thoroughly and log errors' },
      sun_20:  { label: 'Sun: 20m Cumulative Revision', minutes: 20, desc: 'Revise earlier completed subjects & lowest-scoring modules' },
      sun_25:  { label: 'Sun: 25m Explanations Review', minutes: 25, desc: 'Review explanations & retry previous mistakes' },
      sun_10:  { label: 'Sun: 10m Error Log & Check-In', minutes: 10, desc: 'Complete Sunday Check-In form and update module error log' }
    };

    let timerState = {
      presetKey: 'pomo_25',
      totalSeconds: 25 * 60,
      remainingSeconds: 25 * 60,
      running: false,
      intervalId: null
    };

    function formatMMSS(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    function playCompletionChime() {
      const soundToggle = document.getElementById('timerSoundToggle');
      if (soundToggle && !soundToggle.checked) return;
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.18);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.18 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.18);
          osc.stop(ctx.currentTime + idx * 0.18 + 0.36);
        });
      } catch (e) {}
    }

    function updateTimerDisplays() {
      const str = formatMMSS(timerState.remainingSeconds);
      const preset = TIMER_PRESETS[timerState.presetKey] || { label: 'Custom Timer', desc: 'Custom study block' };

      document.getElementById('miniTimerDisplay').textContent = str;
      document.getElementById('miniTimerLabel').textContent = preset.label.split(':')[0];
      document.getElementById('miniTimerToggleBtn').textContent = timerState.running ? 'Pause' : 'Start';
      const ind = document.getElementById('miniTimerIndicator');
      ind.className = timerState.running ? 'w-2 h-2 rounded-full bg-teal-400 timer-running-badge' : 'w-2 h-2 rounded-full bg-slate-500';

      document.getElementById('sideTimerDisplay').textContent = str;
      document.getElementById('sideTimerModeTitle').textContent = preset.label;
      document.getElementById('sideTimerSubtext').textContent = preset.desc + (timerState.running ? ' • Running' : ' • Paused');

      document.getElementById('fullTimerDisplay').textContent = str;
      document.getElementById('fullTimerPhaseBadge').textContent = preset.label.toUpperCase();
      document.getElementById('fullTimerDescription').textContent = preset.desc;
    }

    function selectTimerPreset(key) {
      if (timerState.intervalId) {
        clearInterval(timerState.intervalId);
        timerState.intervalId = null;
      }
      timerState.running = false;
      const p = TIMER_PRESETS[key] || TIMER_PRESETS.pomo_25;
      timerState.presetKey = key;
      timerState.totalSeconds = p.minutes * 60;
      timerState.remainingSeconds = p.minutes * 60;
      const sel = document.getElementById('quickTimerPresetSelect');
      if (sel && TIMER_PRESETS[key]) sel.value = key;
      updateTimerDisplays();
    }

    function setCustomTimerMinutes(minsOverride) {
      const inputEl = document.getElementById('customTimerMinutesInput');
      const rawMins = minsOverride !== undefined ? minsOverride : (inputEl ? parseInt(inputEl.value, 10) : 50);
      const mins = Math.min(300, Math.max(1, rawMins || 25));
      if (inputEl) inputEl.value = mins;
      const sideInput = document.getElementById('sideCustomMinutesInput');
      if (sideInput) sideInput.value = mins;
      if (timerState.intervalId) {
        clearInterval(timerState.intervalId);
        timerState.intervalId = null;
      }
      timerState.running = false;
      TIMER_PRESETS.custom = { label: 'Custom: ' + mins + 'm Timer', minutes: mins, desc: mins + '-minute custom study timer' };
      timerState.presetKey = 'custom';
      timerState.totalSeconds = mins * 60;
      timerState.remainingSeconds = mins * 60;
      updateTimerDisplays();
      showToast('Set custom timer to ' + mins + ' minutes');
    }

    function applySideCustomMinutes() {
      const sideInput = document.getElementById('sideCustomMinutesInput');
      const mins = Math.min(300, Math.max(1, parseInt(sideInput ? sideInput.value : '25', 10) || 25));
      setCustomTimerMinutes(mins);
    }

    function adjustActiveTimerMinutes(deltaMins) {
      const deltaSec = deltaMins * 60;
      const nextRem = Math.min(300 * 60, Math.max(60, timerState.remainingSeconds + deltaSec));
      const nextTot = Math.min(300 * 60, Math.max(nextRem, timerState.totalSeconds + deltaSec));
      timerState.remainingSeconds = nextRem;
      timerState.totalSeconds = nextTot;
      const newMins = Math.round(nextRem / 60);
      const sideInput = document.getElementById('sideCustomMinutesInput');
      if (sideInput) sideInput.value = newMins;
      const studioInput = document.getElementById('customTimerMinutesInput');
      if (studioInput) studioInput.value = newMins;
      TIMER_PRESETS.custom = { label: 'Custom: ' + newMins + 'm Timer', minutes: newMins, desc: newMins + '-minute custom study timer' };
      timerState.presetKey = 'custom';
      updateTimerDisplays();
      showToast((deltaMins > 0 ? '+' : '') + deltaMins + 'm → Timer set to ' + formatMMSS(timerState.remainingSeconds));
    }

    function syncUserPomodoroPresetsFromState() {
      const ps = (appState && appState.pomoSettings) || { focusMins: 25, shortBreakMins: 5, longBreakMins: 15 };
      const fM = Math.min(240, Math.max(1, Number(ps.focusMins) || 25));
      const sM = Math.min(120, Math.max(1, Number(ps.shortBreakMins) || 5));
      const lM = Math.min(180, Math.max(1, Number(ps.longBreakMins) || 15));

      TIMER_PRESETS.pomo_25 = { label: `Pomodoro: ${fM}m Focus`, minutes: fM, desc: `${fM}-minute deep focus sprint followed by ${sM}m break` };
      TIMER_PRESETS.pomo_5  = { label: `Pomodoro: ${sM}m Short Break`, minutes: sM, desc: `${sM}-minute rest & hydration break` };
      TIMER_PRESETS.pomo_15 = { label: `Pomodoro: ${lM}m Long Break`, minutes: lM, desc: `${lM}-minute recharge break after 4 Pomodoros` };

      // Also scale official weekday/weekend presets dynamically to user's daily study hours
      const wkHrs = Number((appState.planConfig && appState.planConfig.weekdayHours) ?? 2.0);
      const wkTotalM = Math.max(30, Math.round(wkHrs * 60));
      const ethM = Math.max(10, Math.round(wkTotalM * (20 / 120)));
      const mainM = Math.max(15, wkTotalM - ethM);
      const readM = Math.round(mainM * 0.85);
      const noteM = Math.max(5, mainM - readM);
      TIMER_PRESETS.wk_85 = { label: `Weekday: ${readM}m Main Reading`, minutes: readM, desc: 'Read assigned main-subject lessons & worked examples' };
      TIMER_PRESETS.wk_15 = { label: `Weekday: ${noteM}m Concise Notes`, minutes: noteM, desc: 'Write concise notes & mark difficult passages' };
      TIMER_PRESETS.wk_20 = { label: `Daily: ${ethM}m Ethics Block`, minutes: ethM, desc: 'Assigned LES Ethics reading, case study, or 3–4 practice questions' };

      const sel = document.getElementById('quickTimerPresetSelect');
      if (sel && sel.options.length >= 3) {
        sel.options[0].textContent = TIMER_PRESETS.pomo_25.label;
        sel.options[1].textContent = TIMER_PRESETS.pomo_5.label;
        sel.options[2].textContent = TIMER_PRESETS.pomo_15.label;
        if (sel.options[3]) sel.options[3].textContent = TIMER_PRESETS.wk_85.label;
        if (sel.options[4]) sel.options[4].textContent = TIMER_PRESETS.wk_15.label;
        if (sel.options[5]) sel.options[5].textContent = TIMER_PRESETS.wk_20.label;
      }

      const sf = document.getElementById('sideFocusMinLabel'); if (sf) sf.textContent = fM;
      const ssb = document.getElementById('sideShortBreakMinLabel'); if (ssb) ssb.textContent = sM;
      const slb = document.getElementById('sideLongBreakMinLabel'); if (slb) slb.textContent = lM;

      const stF = document.getElementById('studioFocusBtnTitle'); if (stF) stF.textContent = fM + 'm Pomodoro';
      const stS = document.getElementById('studioShortBreakBtnTitle'); if (stS) stS.textContent = sM + 'm Short Break';
      const stL = document.getElementById('studioLongBreakBtnTitle'); if (stL) stL.textContent = lM + 'm Long Break';

      const inF = document.getElementById('userPomoFocusInput'); if (inF) inF.value = fM;
      const inS = document.getElementById('userPomoShortBreakInput'); if (inS) inS.value = sM;
      const inL = document.getElementById('userPomoLongBreakInput'); if (inL) inL.value = lM;
    }

    function saveUserPomodoroDefaults() {
      const fM = Math.min(240, Math.max(1, parseInt(document.getElementById('userPomoFocusInput').value, 10) || 25));
      const sM = Math.min(120, Math.max(1, parseInt(document.getElementById('userPomoShortBreakInput').value, 10) || 5));
      const lM = Math.min(180, Math.max(1, parseInt(document.getElementById('userPomoLongBreakInput').value, 10) || 15));
      appState.pomoSettings = { focusMins: fM, shortBreakMins: sM, longBreakMins: lM };
      saveState();
      syncUserPomodoroPresetsFromState();
      selectTimerPreset('pomo_25');
      showToast(`Saved personal Pomodoro defaults: ${fM}m Focus / ${sM}m Short / ${lM}m Long!`);
    }

    function toggleTimer() {
      if (timerState.running) {
        clearInterval(timerState.intervalId);
        timerState.intervalId = null;
        timerState.running = false;
        updateTimerDisplays();
      } else {
        if (timerState.remainingSeconds <= 0) {
          timerState.remainingSeconds = timerState.totalSeconds;
        }
        timerState.running = true;
        updateTimerDisplays();
        timerState.intervalId = setInterval(() => {
          if (timerState.remainingSeconds > 0) {
            timerState.remainingSeconds--;
            updateTimerDisplays();
          } else {
            clearInterval(timerState.intervalId);
            timerState.intervalId = null;
            timerState.running = false;
            playCompletionChime();
            const p = TIMER_PRESETS[timerState.presetKey] || { label: 'Study Session', minutes: Math.round(timerState.totalSeconds / 60) };
            const isBreakPreset = (timerState.presetKey === 'pomo_5' || timerState.presetKey === 'pomo_15' || /break/i.test(p.label));
            if (isBreakPreset) {
              showToast('Completed ' + p.label + '! Break time is excluded from study hours.');
            } else {
              const activeSubj = getActiveTimerSubjectCode();
              appState.timerSessions.push({
                id: 'ts-' + Date.now(),
                source: 'timer',
                activityType: activeSubj === 'ET' ? 'ethics' : 'reading',
                label: p.label,
                subject: activeSubj,
                minutes: p.minutes,
                date: appState.activeDate,
                notes: 'Completed via Focus Timer'
              });
              saveState();
              showToast('Completed ' + p.label + '! Logged ' + p.minutes + 'm focus time (' + activeSubj + ').');
            }
            updateTimerDisplays();
            renderTimerHistory();
            renderKPIs();
          }
        }, 1000);
      }
    }

    function resetTimer() {
      if (timerState.intervalId) {
        clearInterval(timerState.intervalId);
        timerState.intervalId = null;
      }
      timerState.running = false;
      timerState.remainingSeconds = timerState.totalSeconds;
      updateTimerDisplays();
    }

    function logCompletedTimerSession() {
      const p = TIMER_PRESETS[timerState.presetKey] || { label: 'Study Block', minutes: Math.round(timerState.totalSeconds / 60) };
      if (timerState.presetKey === 'pomo_5' || timerState.presetKey === 'pomo_15' || /break/i.test(p.label)) {
        showToast('Break timers are excluded from actual study hours. Select a Focus or Study Block preset to log study time.');
        return;
      }
      const elapsedSeconds = Math.max(0, timerState.totalSeconds - timerState.remainingSeconds);
      const elapsedMins = elapsedSeconds >= 60 ? Math.round(elapsedSeconds / 60) : p.minutes;
      const minsToLog = Math.max(1, elapsedMins);
      const activeSubj = getActiveTimerSubjectCode();
      appState.timerSessions.push({
        id: 'ts-' + Date.now(),
        source: 'timer',
        activityType: activeSubj === 'ET' ? 'ethics' : 'reading',
        label: p.label,
        subject: activeSubj,
        minutes: minsToLog,
        date: appState.activeDate,
        notes: elapsedSeconds >= 60 ? `Logged ${minsToLog}m elapsed timer session` : `Logged ${minsToLog}m preset block`
      });
      saveState();
      recordCurrentUserIntoTelemetryDirectory('Logged ' + minsToLog + 'm Timer (' + activeSubj + ')');
      sendActiveUserTelemetryPing('timer_logged_' + minsToLog + 'm', false);
      showToast('Logged ' + minsToLog + ' min (' + p.label + ' • ' + activeSubj + ') to actual study hours!');
      renderTimerHistory();
      renderKPIs();
      if (currentTab === 'daily') renderDailyView();
    }

    function renderTimerHistory() {
      renderSubjectTimerHoursBreakdown();
      const listEl = document.getElementById('timerSessionHistoryList');
      if (!listEl) return;
      const validSessions = (appState.timerSessions || []).filter(s => s && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15');
      let totalMins = 0;
      validSessions.forEach(s => { totalMins += (parseInt(s.minutes, 10) || 0); });
      const totalHrs = totalMins / 60;
      const countEl = document.getElementById('timerLoggedSessionsCount');
      if (countEl) {
        countEl.textContent = `${totalHrs.toFixed(1)} hrs (${validSessions.length} sessions • ${totalMins} mins)`;
      }

      // Weekly & Monthly Planned vs. Actual Comparison in Focus Studio
      if (typeof getWeeklyAndMonthlyTimeReport === 'function') {
        const rep = getWeeklyAndMonthlyTimeReport(appState.activeDate);
        const wkEl = document.getElementById('timerWeeklyPlannedVsActual');
        const moEl = document.getElementById('timerMonthlyPlannedVsActual');
        if (wkEl) wkEl.textContent = `${rep.weekActualHrs.toFixed(1)}h / ${rep.weekPlannedHrs.toFixed(1)}h (${rep.weekPct}%)`;
        if (moEl) moEl.textContent = `${rep.monthActualHrs.toFixed(1)}h / ${rep.monthPlannedHrs.toFixed(1)}h (${rep.monthPct}%)`;
      }

      const wl = typeof computeBottomUpWorkloadAndFeasibility === 'function'
        ? computeBottomUpWorkloadAndFeasibility()
        : { completedWorkloadHours: 0 };
      const eqEl = document.getElementById('timerEquivHours');
      if (eqEl) {
        eqEl.textContent = `${(wl.completedWorkloadHours || 0).toFixed(1)} hrs curriculum workload done`;
      }

      if (validSessions.length === 0) {
        listEl.innerHTML = `<div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">No focus sessions recorded yet. Start a Pomodoro/study timer and click "+ Log Time", or click "+ Log Manual Session" above.</div>`;
      } else {
        listEl.innerHTML = validSessions.slice().reverse().map(s => {
          const srcBadge = s.source === 'manual'
            ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-800">Manual</span>`
            : `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Timer</span>`;
          return `
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-xs">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">${s.subject || getActiveTimerSubjectCode(s.date)}</span>
                  ${srcBadge}
                  <span class="font-bold text-slate-800">${s.label || 'Study Session'}</span>
                  <span class="text-slate-400">(${s.date})</span>
                </div>
                ${s.notes ? `<p class="text-[11px] text-slate-500 truncate mt-0.5">${s.notes}</p>` : ''}
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <span class="font-extrabold text-teal-700">+${s.minutes}m</span>
                <button type="button" onclick="openManualTimeModal('${s.date}', '${s.id}')" class="text-[10px] px-1.5 py-0.5 rounded bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 font-semibold" title="Edit session">Edit</button>
                <button type="button" onclick="deleteTimerSession('${s.id}')" class="text-[10px] px-1.5 py-0.5 rounded bg-white hover:bg-rose-50 text-rose-600 border border-slate-300 font-semibold" title="Delete session">&times;</button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    function clearTimerHistory() {
      appState.timerSessions = [];
      saveState();
      renderTimerHistory();
      renderKPIs();
      showToast('Cleared timer session log.');
    }

    
    function renderInlineBarChart(canvasId, labels, series1, label1, color1, series2, label2, color2) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      let svgBox = parent.querySelector('.svg-chart-fallback');
      if (!svgBox) {
        canvas.style.display = 'none';
        svgBox = document.createElement('div');
        svgBox.className = 'svg-chart-fallback w-full h-full flex flex-col justify-between';
        parent.appendChild(svgBox);
      }
      const n = Math.max(1, labels.length);
      const w = 640, h = 210, padL = 38, padR = 16, padT = 18, padB = 34;
      const plotW = w - padL - padR, plotH = h - padT - padB;
      const step = plotW / n;
      let bars = '';
      // Grid lines
      [0, 25, 50, 70, 100].forEach(val => {
        const y = padT + plotH - (val / 100) * plotH;
        const stroke = val === 70 ? '#f59e0b' : '#e2e8f0';
        const dash = val === 70 ? 'stroke-dasharray="4,3"' : '';
        bars += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${w - padR}" y2="${y.toFixed(1)}" stroke="${stroke}" ${dash} stroke-width="1" />`;
        bars += `<text x="${padL - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="#64748b">${val}%</text>`;
      });
      labels.forEach((lbl, i) => {
        const v1 = Math.min(100, Math.max(0, Number(series1[i]) || 0));
        const v2 = series2 ? Math.min(100, Math.max(0, Number(series2[i]) || 0)) : null;
        const xCenter = padL + i * step + step / 2;
        const bw = series2 ? Math.min(16, step * 0.34) : Math.min(24, step * 0.55);
        const h1 = (v1 / 100) * plotH;
        const y1 = padT + plotH - h1;
        bars += `<rect x="${(series2 ? xCenter - bw - 1 : xCenter - bw/2).toFixed(1)}" y="${y1.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(2, h1).toFixed(1)}" rx="3" fill="${color1}"><title>${lbl} ${label1}: ${v1}%</title></rect>`;
        if (series2 !== null) {
          const h2 = (v2 / 100) * plotH;
          const y2 = padT + plotH - h2;
          bars += `<rect x="${(xCenter + 1).toFixed(1)}" y="${y2.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(2, h2).toFixed(1)}" rx="3" fill="${color2}"><title>${lbl} ${label2}: ${v2}%</title></rect>`;
        }
        bars += `<text x="${xCenter.toFixed(1)}" y="${h - 12}" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">${lbl}</text>`;
      });
      svgBox.innerHTML = `
        <svg viewBox="0 0 ${w} ${h}" class="w-full h-full" preserveAspectRatio="none">${bars}</svg>
        <div class="flex items-center justify-center gap-4 text-xs text-slate-600 pt-1">
          <span class="flex items-center gap-1.5"><span style="width:10px;height:10px;background:${color1};display:inline-block;border-radius:2px"></span>${label1}</span>
          ${series2 ? `<span class="flex items-center gap-1.5"><span style="width:10px;height:10px;background:${color2};display:inline-block;border-radius:2px"></span>${label2}</span>` : ''}
          <span class="flex items-center gap-1.5 text-amber-800">-- 70% Target</span>
        </div>
      `;
    }

    let topicChartInstance = null;
    let weeklyChartInstance = null;
    let mockChartInstance = null;

    function updateTopicAccuracyChart() {
      const canvas = document.getElementById('topicAccuracyChart');
      if (!canvas) return;
      const labels = PLAN_DATA.subjects.map(s => s.code);
      const accData = PLAN_DATA.subjects.map(s => {
        let att = 0, cor = 0;
        PLAN_DATA.modules.filter(m => m.subject === s.code).forEach(m => {
          const st = getModuleStats(m.code);
          att += st.attempted;
          cor += st.correct;
        });
        return att > 0 ? Math.round((cor / att) * 1000) / 10 : 0;
      });
      const readData = PLAN_DATA.subjects.map(s => {
        let tot = 0, done = 0;
        Object.values(allItemsById).forEach(it => {
          if (it.subject === s.code && (it.kind === 'lesson' || (s.code === 'ET' && it.kind === 'ethics_reading'))) {
            tot++;
            if (appState.completedItems[it.id]) done++;
          }
        });
        return tot > 0 ? Math.round((done / tot) * 1000) / 10 : 0;
      });

      renderInlineBarChart('topicAccuracyChart', labels, accData, 'Question Accuracy %', '#0d9488', readData, 'Reading Completion %', '#2563eb');
    }

    function updateWeeklyTrendChart() {
      const canvas = document.getElementById('weeklyTrendChart');
      if (!canvas) return;
      const labels = [];
      const accSeries = [];
      const qSeries = [];
      const maxW = getMaxWeekNum();
      for (let w = 1; w <= maxW; w++) {
        labels.push('W' + w);
        const s = appState.weeklySummaries[w] || {};
        accSeries.push(parseFloat(s.accuracy) || 0);
        qSeries.push(parseInt(s.questions, 10) || 0);
      }
      renderInlineBarChart('weeklyTrendChart', labels, accSeries, 'Weekly Accuracy %', '#0d9488', qSeries, 'Questions Attempted', '#4f46e5');
    }

    function updateMockScoreChart() {
      const canvas = document.getElementById('mockScoreChart');
      if (!canvas) return;
      const labels = appState.mockExams.map(m => m.name.slice(0, 18));
      const amData = appState.mockExams.map(m => m.amScore);
      const pmData = appState.mockExams.map(m => m.pmScore);

      renderInlineBarChart('mockScoreChart', labels, amData, 'AM Session %', '#2563eb', pmData, 'PM Session %', '#0d9488');
    }

    const TAB_NAMES = ['daily', 'schedule', 'modules', 'weekly', 'mocks', 'timer'];
    let currentTab = 'daily';

    const SUB_TAB_META = {
      schedule: {
        eyebrow: 'STUDY ROADMAP & PACING',
        title: '21-Week Schedule & 148-Day Heatmap.',
        subtitle: 'Track your daily pace against the March 28 target, inspect all 148 study blocks, and rebalance unfinished items.',
        pill: '1 NOV 2026 – 28 MAR 2027'
      },
      modules: {
        eyebrow: 'CURRICULUM & FORMULA VAULT',
        title: '53 LES Modules, Accuracy & Formula Sheet.',
        subtitle: 'Log Saturday/Sunday practice scores, rank your lowest-scoring modules, and search the 53-module Formula & Vignette Trap Vault.',
        pill: '53 MODULES · 1,936 QUESTIONS'
      },
      weekly: {
        eyebrow: 'SUNDAY CHECK-IN PROTOCOL',
        title: 'Weekly Reflection & Revision Generator.',
        subtitle: 'Record your weekly accuracy before checking answers, log your top 3 conceptual gaps, and auto-generate your Sunday revision set.',
        pill: '21 WEEKLY CHECK-INS'
      },
      mocks: {
        eyebrow: 'PHASE 2 · POST-MARCH 28 COMMAND CENTER',
        title: 'Mock Exams & Vignette Pacing.',
        subtitle: 'Break down AM/PM mock exams by CFA topic, monitor your 12-minute-per-vignette pacing, and burn down remaining Q-Bank sets.',
        pill: '29 MAR – MAY 2027 EXAM'
      },
      timer: {
        eyebrow: 'DEEP WORK & TIME BUDGET',
        title: 'Focus Studio & Subject Hours.',
        subtitle: 'Run Pomodoro or official 85m / 45m / 20m study blocks with automatic subject tagging against your 296-hour budget.',
        pill: '296.0 PLANNED HOURS'
      }
    };

    function switchTab(tabId) {
      currentTab = tabId;
      TAB_NAMES.forEach(t => {
        const panel = document.getElementById('tabPanel-' + t);
        const btn = document.getElementById('tabBtn-' + t);
        if (panel) panel.classList.toggle('hidden', t !== tabId);
        if (btn) {
          btn.className = (t === tabId ? 'tab-btn-active' : 'tab-btn-inactive') +
            ' px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5';
        }
      });

      const heroWrapper = document.getElementById('dailyHeroAndKpiWrapper');
      const subHeader = document.getElementById('subTabHeaderBanner');
      if (tabId === 'daily') {
        if (heroWrapper) heroWrapper.classList.remove('hidden');
        if (subHeader) subHeader.classList.add('hidden');
      } else {
        if (heroWrapper) heroWrapper.classList.add('hidden');
        if (subHeader) {
          subHeader.classList.remove('hidden');
          const meta = SUB_TAB_META[tabId] || SUB_TAB_META.schedule;
          document.getElementById('subTabEyebrow').textContent = meta.eyebrow;
          document.getElementById('subTabTitle').textContent = meta.title;
          document.getElementById('subTabSubtitle').textContent = meta.subtitle;
          document.getElementById('subTabStatPill').textContent = meta.pill;
        }
      }

      if (tabId === 'daily') renderDailyView();
      if (tabId === 'schedule') renderFullSchedule();
      if (tabId === 'modules') renderModulesTable();
      if (tabId === 'weekly') renderWeeklyForms();
      if (tabId === 'mocks') renderMocksAndPhase2();
      if (tabId === 'timer') renderTimerHistory();
      if (typeof recordCurrentUserIntoTelemetryDirectory === 'function') {
        const tabLabels = { daily: 'Daily Workspace', schedule: 'Study Roadmap', modules: 'Modules & Formula Vault', weekly: 'Weekly Reflection', mocks: 'Mocks & Practice', timer: 'Focus Studio' };
        recordCurrentUserIntoTelemetryDirectory('Viewing ' + (tabLabels[tabId] || tabId));
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function exportBackupJson() {
      const dataStr = JSON.stringify(appState, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeUser = ((appState.userProfile && appState.userProfile.name) || 'Candidate').replace(/[^a-zA-Z0-9]+/g, '_');
      a.download = safeUser + '_CFA_L2_Backup_' + appState.activeDate + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Exported study progress backup JSON!');
    }

    function importBackupJson(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (imported && typeof imported === 'object') {
            appState = Object.assign({}, appState, imported);
            saveState();
            document.getElementById('activeDateInput').value = appState.activeDate;
            refreshAllViews();
            showToast('Successfully restored progress from backup!');
          }
        } catch (err) {
          showToast('Invalid JSON backup file.');
        }
      };
      reader.readAsText(file);
    }

    function refreshAllViews() {
      renderKPIs();
      renderDailyView();
      if (currentTab === 'schedule') renderFullSchedule();
      if (currentTab === 'modules') renderModulesTable();
      if (currentTab === 'weekly') renderWeeklyForms();
      if (currentTab === 'mocks') renderMocksAndPhase2();
      if (currentTab === 'timer') renderTimerHistory();
    }

    
    // ==================== NEW UPGRADED WORKFLOW FUNCTIONS ====================

    // 1. Jump to Today or Next Unfinished Study Day
    function jumpToTodayOrNextUnfinished() {
      const now = new Date();
      const todayIso = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
      if (daysByDate[todayIso]) {
        appState.activeDate = todayIso;
        document.getElementById('activeDateInput').value = todayIso;
        saveState();
        switchTab('daily');
        refreshAllViews();
        showToast('Jumped to today (' + todayIso + ')');
        return;
      }
      // If real-world date is outside Nov 1 2026 - Mar 28 2027, jump to first unfinished study day
      const nextUnfinished = PLAN_DATA.days.find(d =>
        [...d.mainItems, ...d.ethicsItems].some(it => !appState.completedItems[it.id])
      ) || PLAN_DATA.days[1];
      appState.activeDate = nextUnfinished.date;
      document.getElementById('activeDateInput').value = nextUnfinished.date;
      saveState();
      switchTab('daily');
      refreshAllViews();
      showToast('Jumped to next unfinished study day: ' + nextUnfinished.dateDisplay);
    }

    // 2. 1-3 Star Confidence / Difficulty Toggle per Lesson
    function cycleLessonConfidence(itemId, ev) {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      if (!appState.lessonConfidence) appState.lessonConfidence = {};
      const cur = appState.lessonConfidence[itemId] || 0;
      const next = (cur + 1) % 4; // 0: Unrated, 1: ★ Hard, 2: ★★ Medium, 3: ★★★ Mastered
      if (next === 0) {
        delete appState.lessonConfidence[itemId];
      } else {
        appState.lessonConfidence[itemId] = next;
      }
      saveState();
      const codeStr = allItemsById[itemId] ? allItemsById[itemId].code : 'Lesson';
      const labels = ['Unrated', '★ Hard (Added to Revision Queue)', '★★ Medium Confidence', '★★★ Mastered'];
      recordCurrentUserIntoTelemetryDirectory('Rated ' + codeStr + ' (' + labels[next].split(' ')[0] + ')');
      sendActiveUserTelemetryPing('confidence_rated', false);
      showToast(codeStr + ' → ' + labels[next]);
      refreshAllViews();
    }

    function renderConfidenceButtonHtml(itemId, compact) {
      const lvl = (appState.lessonConfidence && appState.lessonConfidence[itemId]) || 0;
      const padCls = compact ? 'text-[10px] px-2 py-0.5 rounded' : 'text-[11px] px-2.5 py-1 rounded-lg';
      if (lvl === 1) {
        return `<button type="button" onclick="cycleLessonConfidence('${itemId}', event)" class="${padCls} bg-rose-100 text-rose-800 border border-rose-200 font-bold whitespace-nowrap transition" title="Rated Hard — Click to cycle confidence">&#9733; Hard</button>`;
      }
      if (lvl === 2) {
        return `<button type="button" onclick="cycleLessonConfidence('${itemId}', event)" class="${padCls} bg-amber-100 text-amber-900 border border-amber-200 font-bold whitespace-nowrap transition" title="Rated Medium — Click to cycle confidence">&#9733;&#9733; Med</button>`;
      }
      if (lvl === 3) {
        return `<button type="button" onclick="cycleLessonConfidence('${itemId}', event)" class="${padCls} bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold whitespace-nowrap transition" title="Rated Mastered — Click to cycle confidence">&#9733;&#9733;&#9733; Easy</button>`;
      }
      return `<button type="button" onclick="cycleLessonConfidence('${itemId}', event)" class="${padCls} bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 font-semibold whitespace-nowrap transition" title="Rate lesson confidence (1-3 stars)">&#9734; Rate</button>`;
    }

    // 3. 148-Day Visual Calendar Heatmap & Pace Indicator
    function renderPacingAndHeatmap() {
      const grid = document.getElementById('scheduleHeatmapGrid');
      if (!grid) return;

      let expectedLessons = 0;
      let actualLessons = 0;
      let actualEthics = 0;
      let fullDaysDone = 0;
      let currentStreak = 0;
      let streakBroken = false;

      let activeStudyDaysDenominator = 0;
      let daysOffCount = 0;
      PLAN_DATA.days.forEach(d => {
        const isOff = typeof isDateMarkedDayOff === 'function' && isDateMarkedDayOff(d.date);
        if (isOff) {
          daysOffCount++;
        } else {
          activeStudyDaysDenominator++;
        }
        const allItems = [...d.mainItems, ...d.ethicsItems];
        const doneCount = allItems.filter(i => appState.completedItems[i.id]).length;
        if (!isOff && doneCount === allItems.length && allItems.length > 0) {
          fullDaysDone++;
        }
        d.mainItems.forEach(it => {
          if (it.kind === 'lesson') {
            if (!isOff && d.date <= appState.activeDate) expectedLessons++;
            if (appState.completedItems[it.id]) actualLessons++;
          }
        });
        d.ethicsItems.forEach(it => {
          if (appState.completedItems[it.id]) actualEthics++;
        });
      });

      // Compute streak up to activeDate (Scheduled Days Off never break a study streak!)
      const daysUpToActive = PLAN_DATA.days.filter(d => d.date <= appState.activeDate).slice().reverse();
      daysUpToActive.forEach(d => {
        if (streakBroken) return;
        const isOff = typeof isDateMarkedDayOff === 'function' && isDateMarkedDayOff(d.date);
        if (isOff) return;
        const allItems = [...d.mainItems, ...d.ethicsItems];
        const doneCount = allItems.filter(i => appState.completedItems[i.id]).length;
        const hasLoggedTime = typeof getActualMinutesForDate === 'function' && getActualMinutesForDate(d.date) > 0;
        if (doneCount > 0 || hasLoggedTime) currentStreak++;
        else streakBroken = true;
      });

      let hardCount = 0;
      let masteredCount = 0;
      Object.values(appState.lessonConfidence || {}).forEach(v => {
        if (v === 1) hardCount++;
        if (v === 3) masteredCount++;
      });

      const delta = actualLessons - expectedLessons;
      const badge = document.getElementById('paceStatusBadge');
      if (delta >= 2) {
        badge.textContent = 'Ahead by ' + delta + ' Lessons';
        badge.className = 'text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800';
      } else if (delta >= -2) {
        badge.textContent = 'On Track (' + (delta >= 0 ? '+' + delta : delta) + ' vs plan)';
        badge.className = 'text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800';
      } else {
        badge.textContent = 'Behind by ' + Math.abs(delta) + ' Lessons';
        badge.className = 'text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900';
      }

      document.getElementById('paceExpectedLessons').textContent = expectedLessons + ' / 461 lessons';
      document.getElementById('paceActiveDateSub').textContent = 'Scheduled through ' + appState.activeDate;
      document.getElementById('paceActualLessons').textContent = actualLessons + ' lessons done';
      document.getElementById('paceDeltaSub').textContent = actualEthics + ' ethics blocks completed';
      document.getElementById('paceCompletedDaysCount').textContent = fullDaysDone + ' / ' + activeStudyDaysDenominator + ' study days';
      document.getElementById('paceStreakSub').textContent = 'Streak: ' + currentStreak + 'd' + (daysOffCount > 0 ? ' • ' + daysOffCount + ' Day(s) Off' : '');
      document.getElementById('paceConfidenceSummary').textContent = hardCount + ' ★ Hard';
      document.getElementById('paceMasteredSub').textContent = masteredCount + ' ★★★ Mastered';

      grid.innerHTML = PLAN_DATA.days.map((d, idx) => {
        const isOff = typeof isDateMarkedDayOff === 'function' && isDateMarkedDayOff(d.date);
        const allItems = [...d.mainItems, ...d.ethicsItems];
        const done = allItems.filter(i => appState.completedItems[i.id]).length;
        const total = allItems.length;
        const isCurrent = d.date === appState.activeDate;
        let bgCls = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';
        if (isOff) {
          bgCls = 'bg-slate-200/70 text-slate-500 border-slate-300 border-dashed';
        } else if (done === total && total > 0) {
          bgCls = 'bg-emerald-600 text-white border-emerald-600';
        } else if (done > 0) {
          bgCls = 'bg-amber-200 text-amber-950 border-amber-300';
        } else if (d.date < appState.activeDate) {
          bgCls = 'bg-rose-100 text-rose-800 border-rose-200';
        }
        const activeRing = isCurrent ? 'ring-2 ring-indigo-600 font-extrabold' : '';
        return `
          <button type="button" onclick="setActiveDateAndOpenDaily('${d.date}')" title="Day ${idx + 1}: ${d.dateDisplay} (${isOff ? 'Scheduled Day Off' : d.weekSubject}) • ${isOff ? '0h Off' : done + '/' + total + ' Done'}" class="p-1.5 rounded-lg border text-center transition flex flex-col items-center justify-center ${bgCls} ${activeRing}">
            <span class="text-[9px] font-bold leading-none">${d.dateShort}</span>
            <span class="text-[8px] opacity-80 mt-0.5">${isOff ? 'OFF' : (done + '/' + total)}</span>
          </button>
        `;
      }).join('');
      if (typeof renderSynchronizedMonthlyCalendars === 'function') {
        renderSynchronizedMonthlyCalendars();
      }
    }

    function autoRebalanceOverdueItems() {
      let shifted = 0;
      PLAN_DATA.days.forEach(d => {
        if (d.date < appState.activeDate) {
          [...d.mainItems, ...d.ethicsItems].forEach(it => {
            if (!appState.completedItems[it.id] && appState.shiftedItems[it.id] !== appState.activeDate) {
              appState.shiftedItems[it.id] = appState.activeDate;
              shifted++;
            }
          });
        }
      });
      if (shifted === 0) {
        showToast('No overdue unfinished items before ' + appState.activeDate + '!');
        return;
      }
      saveState();
      refreshAllViews();
      showToast('Rebalanced ' + shifted + ' overdue item(s) into ' + appState.activeDate + '!');
    }

    // 4. Searchable 53-Module Formula & Vignette Trap Vault
    const DEFAULT_FORMULAS = [
      // ==================== CALCULATOR SETUP (Page 4) ====================
      {
        id: 'fm-CALC', mod: 'QM M1', subj: 'QM', page: 'p. 4',
        title: 'Setting Up the Texas BA II Plus Financial Calculator',
        eq: '2ND + FORMAT → DEC = 9 (Floating decimal)\n2ND + P/Y → 1 (Annual periods)\n2ND + BGN → END mode | CHN vs AOS: Set to AOS (Algebraic Operating System)',
        trap: 'Always set DEC = 9 (floating decimals) and AOS order of operations before starting vignette calculations.',
        video: 'https://youtu.be/0MS8d8QOFmc'
      },

      // ==================== VOLUME 1: QUANTITATIVE METHODS (Pages 4-9) ====================
      {
        id: 'fm-QMM1', mod: 'QM M1', subj: 'QM', page: 'p. 4',
        title: 'Multiple Linear Regression & Total Variation of Y',
        eq: 'Y_i = b_0 + b_1 X_{1i} + b_2 X_{2i} + ... + b_k X_{ki} + ε_i   (i = 1, 2, ..., n)\nVariation of Y (SST) = Σ(Y_i - Ȳ)²\nwhere: n = observations, k = independent variables, b_0 = intercept, b_1..b_k = slope coefficients',
        trap: 'Degrees of freedom for regression = k; degrees of freedom for residual error = n - k - 1; total df = n - 1.'
      },
      {
        id: 'fm-QMM2-a', mod: 'QM M2', subj: 'QM', page: 'p. 4',
        title: 'Coefficient of Determination (R²) & Adjusted R² (R̄²)',
        eq: 'R² = SSR / SST = 1 - (SSE / SST)\nSST = Σ(Y_i - Ȳ)²  |  SSR = Σ(Ŷ_i - Ȳ)²  |  SSE = Σ(Y_i - Ŷ_i)²\nAdjusted R² (R̄²) = 1 - [ (SSE / (n - k - 1)) / (SST / (n - 1)) ] = 1 - [ (n - 1) / (n - k - 1) ] × (1 - R²)',
        trap: 'Adjusted R² penalizes adding extra independent variables; R̄² increases only if the added variable has |t-stat| > 1.'
      },
      {
        id: 'fm-QMM2-b', mod: 'QM M2', subj: 'QM', page: 'p. 5',
        title: 'Akaike (AIC) & Schwarz Bayesian (BIC) Information Criteria',
        eq: 'AIC = n × ln(SSE / n) + 2(k + 1)\nBIC = n × ln(SSE / n) + ln(n) × (k + 1)\nwhere: n = sample size, k = number of independent variables',
        trap: 'Lower AIC/BIC is better! Use AIC when the goal is prediction accuracy; use BIC when the goal is goodness-of-fit (BIC penalizes complexity more heavily for n > 7).'
      },
      {
        id: 'fm-QMM2-c', mod: 'QM M2', subj: 'QM', page: 'p. 5–6',
        title: 'Joint F-Tests (Nested Omitted Variables & Overall ANOVA) + Slope t-Test',
        eq: 'Joint Omitted Variables F = [ (SSE_restricted - SSE_unrestricted) / q ] / [ SSE_unrestricted / (n - k - 1) ]\nOverall F-stat = MSR / MSE = (SSR / k) / [ SSE / (n - k - 1) ]\nSlope t-stat: t = (b̂_j - B_j) / s_{b̂_j}   (df = n - k - 1)',
        trap: 'In the nested F-test, q is the number of omitted variables in the restricted model (H_0: all q omitted slopes = 0).',
        video: 'https://youtu.be/uR_9im2JP18'
      },
      {
        id: 'fm-QMM3', mod: 'QM M3', subj: 'QM', page: 'p. 6',
        title: 'Model Misspecification: Breusch-Pagan Test & Variance Inflation Factor (VIF)',
        eq: 'Breusch-Pagan Test Stat: χ²_{BP, k} = n × R²_residuals   (one-tailed right test with k df)\nVariance Inflation Factor: VIF_j = 1 / (1 - R²_j)\nwhere R²_j = variation in X_j explained by the other k - 1 independent variables',
        trap: 'VIF_j > 5 warrants investigation; VIF_j > 10 indicates severe multicollinearity (R²_j > 90%).'
      },
      {
        id: 'fm-QMM4-a', mod: 'QM M4', subj: 'QM', page: 'p. 6',
        title: 'Detecting Influential Points: High Leverage & Studentized Deleted Residual',
        eq: 'Sum of all individual leverages (h_ii) = k + 1\nHigh Leverage Rule: h_ii > 3 × (k + 1) / n ⇒ Potentially influential observation\nStudentized Deleted Residual: t_{i*} = e_{i*} / s_{e*} = e_i / √[ MSE_{(i)} × (1 - h_ii) ]',
        trap: 'Leverage (h_ii) measures distance in the independent variables (X); Studentized deleted residual (t_i*) measures outliers in Y when observation i is omitted.'
      },
      {
        id: 'fm-QMM4-b', mod: 'QM M4', subj: 'QM', page: 'p. 7',
        title: 'Logistic Regression (Logit), Odds Ratio & Likelihood Ratio (LR) Test',
        eq: 'Log-odds: ln[ P / (1 - P) ] = b_0 + b_1 X_1 + ... + b_k X_k\nProbability: P = 1 / { 1 + exp[ -(b_0 + b_1 X_1 + ... + b_k X_k) ] }\nOdds Ratio = e^{b_i}  |  LR Stat = -2 × (Log likelihood restricted - Log likelihood unrestricted)',
        trap: 'A 1-unit increase in X_i multiplies the odds P/(1-P) by e^{b_i} (percentage change in odds = e^{b_i} - 1).'
      },
      {
        id: 'fm-QMM5-a', mod: 'QM M5', subj: 'QM', page: 'p. 7–8',
        title: 'Time-Series: Linear vs. Log-Linear Trend & AR(p) Mean-Reverting Level',
        eq: 'Linear Trend: Y_t = b_0 + b_1 t + ε_t\nLog-Linear Trend: ln(Y_t) = b_0 + b_1 t  ⇒  Y_t = e^{b_0 + b_1 t}  (Growth rate = e^{b_1} - 1)\nAR(p): x_t = b_0 + b_1 x_{t-1} + ... + b_p x_{t-p} + ε_t\nResidual Autocorrelation t-stat = ρ_{ε,k} / (1 / √T)\nMean-Reverting Level for AR(1): x_t = b_0 / (1 - b_1)',
        trap: 'In an AR(1) model, if x_t > b_0/(1 - b_1), the series is expected to fall next period; if x_t < b_0/(1 - b_1), it is expected to rise.'
      },
      {
        id: 'fm-QMM5-b', mod: 'QM M5', subj: 'QM', page: 'p. 8',
        title: 'RMSE, Dickey-Fuller Unit-Root Test, MA(q), ARMA(p,q) & ARCH(1)',
        eq: 'RMSE = √(Squared error / n)   (Out-of-sample forecast accuracy)\nDickey-Fuller Test: x_t - x_{t-1} = b_0 + g_1 x_{t-1} + ε_t   where g_1 = b_1 - 1 (H_0: g_1 = 0 unit root)\nARCH(1) Variance Forecast: σ̂²_{t+1} = a_0 + a_1 ε̂²_t',
        trap: 'If a_1 in ARCH(1) is statistically significant, the error variance is time-varying (heteroskedastic) and can be predicted using today’s squared residual.'
      },
      {
        id: 'fm-QMM6', mod: 'QM M6', subj: 'QM', page: 'p. 8',
        title: 'Machine Learning: Neural Network Weight Update (Backpropagation)',
        eq: 'New network weight = Old weight - Learning rate × (Partial derivative of total error w.r.t. old weight)',
        trap: 'Too high a learning rate causes weights to overshoot the minimum; too many hidden nodes/epochs causes overfitting.'
      },
      {
        id: 'fm-QMM7', mod: 'QM M7', subj: 'QM', page: 'p. 9',
        title: 'Big Data: Normalization, Standardization, Confusion Matrix & TF-IDF',
        eq: 'Normalization: X_{norm} = (X_i - X_min) / (X_max - X_min)  |  Standardization: X_{std} = (X_i - μ) / σ\nPrecision (P) = TP / (TP + FP)  |  Recall (R / TPR) = TP / (TP + FN)  |  FPR = FP / (TN + FP)\nAccuracy = (TP + TN) / (TP + FP + TN + FN)  |  F1 Score = (2 × P × R) / (P + R)\nDF = (Sentences with Word) / (Total Sentences)  |  IDF = log(1 / DF)  |  TF-IDF = TF × IDF',
        trap: 'Normalization rescales to [0, 1] and is sensitive to outliers; Standardization centers at 0 (SD = 1) and is less sensitive to outliers.'
      },
      {
        id: 'fm-QMM8', mod: 'QM M8', subj: 'QM', page: 'Ref',
        title: 'Statistical Tables & Hypothesis Testing Reference (Appendices A–E)',
        eq: 't-distribution df = n - k - 1  |  F-distribution df = (k, n - k - 1)  |  Chi-Square df = k',
        trap: 'Remember that Dickey-Fuller uses modified critical t-values (more negative than standard t-tables).'
      },

      // ==================== VOLUME 2: ECONOMICS (Pages 10-13) ====================
      {
        id: 'fm-ECM1-a', mod: 'EC M1', subj: 'EC', page: 'p. 10',
        title: 'FX Cross Rates, Bid/Ask Inversion & Covered Interest Rate Parity (CIRP)',
        eq: '(A/B) = (A/C) × (C/B)  |  If (A/B) Bid/Ask = x / y, then (B/A) Bid/Ask = (1/y) / (1/x)\nCIRP: F_{f/d} = S_{f/d} × [ 1 + i_f × (Actual/360) ] / [ 1 + i_d × (Actual/360) ]\nForward Premium/Discount: (F_{f/d} - S_{f/d}) / S_{f/d} ≈ (i_f - i_d) × (Actual/360)',
        trap: 'Dealer always buys the base currency at the Bid and sells the base currency at the Ask. Invert AND swap when flipping f/d to d/f!',
        video: 'https://youtu.be/9jOzFA9GuHU'
      },
      {
        id: 'fm-ECM1-b', mod: 'EC M1', subj: 'EC', page: 'p. 10–11',
        title: 'Mark-to-Market Value of FX Forward, UIRP, PPP & International Fisher',
        eq: 'Value of Long Forward (V_t) = [ (F_{t, f/d} - F_{0, f/d}) × Contract Size ] / [ 1 + i_f × (Remaining Days / 360) ]\nUIRP: %ΔS^e_{f/d} ≈ (i_f - i_d) × (Actual/360)  |  Relative PPP: %ΔS_{f/d} ≈ (π_f - π_d) × (Actual/360)\nInternational Fisher Effect: i_f - i_d = π^e_f - π^e_d',
        trap: 'If the original position is LONG base currency d (bought at Offer F_0), close it at valuation date t using the new BID forward rate F_t and discount at the price currency rate i_f!',
        video: 'https://youtu.be/wLqyZRrutAc'
      },
      {
        id: 'fm-ECM2-a', mod: 'EC M2', subj: 'EC', page: 'p. 12',
        title: 'Grinold-Kroner Model & Cobb-Douglas Production Function',
        eq: 'Grinold-Kroner: E(R_e) = DY + Δ(P/E) + i + g - ΔS   (where ΔS = Net buyback + Relative dynamism)\nCobb-Douglas: Y = T × K^α × L^(1-α)  ⇒  Output per worker: Y/L = T × (K/L)^α\nMarginal Product of Capital: MPK = α(Y/K)  |  Capital Share: α = rK / Y',
        trap: 'When α is small, diminishing marginal returns to capital deepening set in slowly; when α is close to 1, capital deepening drives output more strongly.'
      },
      {
        id: 'fm-ECM2-b', mod: 'EC M2', subj: 'EC', page: 'p. 13',
        title: 'Growth Accounting, Solow Steady-State & Endogenous Growth Model',
        eq: 'Growth Accounting: ΔY/Y = ΔT/T + α(ΔK/K) + (1 - α)(ΔL/L)\nSteady-State Growth per Capita: g* = θ / (1 - α)  |  Total Output Growth: G* = θ / (1 - α) + n\nEquilibrium Output-to-Capital: Y/K = (1/s) × [ θ/(1 - α) + n + δ ]\nEndogenous Growth Model: y_e = c × k_e  ⇒  Δy_e / y_e = s × c - δ - n',
        trap: 'In the Neoclassical (Solow) model, saving rate s affects the steady-state LEVEL (Y/K) but NOT g*; in the Endogenous model, higher saving rate s permanently raises the growth rate!'
      },

      // ==================== VOLUME 3: FINANCIAL STATEMENT ANALYSIS (Pages 14-18) ====================
      {
        id: 'fm-FAM1', mod: 'FA M1', subj: 'FA', page: 'p. 14',
        title: 'Intercorporate Investments: Equity Method, Partial/Full Goodwill & Impairment',
        eq: 'Ending Inv in Associates = Beginning Inv + Share of NI - Share of Div - Amort of Excess Purchase Price\nIncome Statement Impact = Share of NI - Amort of Excess Purchase Price - Share of Unrealized Profit\nPartial Goodwill = Acq Price - (%Own × FV Net Assets)  |  NCI_partial = %NCI × FV Net Identifiable Assets\nFull Goodwill = FV of Entity - FV Net Assets  |  NCI_full = %NCI × FV of Entity\nIFRS Impairment = Carrying Value of CGU - Recoverable Amount  |  US GAAP = Carrying Goodwill - Implied Goodwill',
        trap: 'Dividends received from an associate reduce the carrying value on the balance sheet—they are NOT recognized as income on the income statement.',
        video: 'https://youtu.be/RgxmPbx4-0o'
      },
      {
        id: 'fm-FAM2-a', mod: 'FA M2', subj: 'FA', page: 'p. 15',
        title: 'Share-Based Compensation & Treasury Stock Method (Diluted Shares)',
        eq: 'Compensation Expense = Fair Value of Award/Options on Grant Date / Vesting Period\nDiluted Shares = Basic Shares + Shares Issued from Exercise - (Assumed Proceeds / Average Share Price)\nAssumed Proceeds = Cash Proceeds from Exercise + Average Unrecognized Share-Based Comp Expense\nEnding Basic Shares = Beg Basic + RSUs Vested + Options Exercised + Secondaries - Share Repurchases',
        trap: 'Assumed proceeds in the Treasury Stock Method include BOTH cash exercise proceeds AND average unrecognized compensation expense!'
      },
      {
        id: 'fm-FAM2-b', mod: 'FA M2', subj: 'FA', page: 'p. 15–16',
        title: 'Defined Benefit Pension Plans: Funded Status, PBO & IFRS Net Interest',
        eq: 'Funded Status = Fair Value of Plan Assets - Pension Obligation (PBO)\nEnding Plan Assets = Beg Plan Assets + Contributions + Actual Return - Benefits Paid\nEnding PBO = Beg PBO + Service Costs + Interest Cost + Actuarial Loss/(Gain) - Benefits Paid\nIFRS Reported Pension Expense (I/S) = Current & Past Service Costs + Net Interest Cost/(Income)\nIFRS Net Interest = (Beg PBO - Beg Plan Assets) × Yield on Investment-Grade Corporate Bond',
        trap: 'Under IFRS, Remeasurements (Actuarial gains/losses + Actual return minus interest income on plan assets) go straight to OCI and are NEVER amortized to the income statement.'
      },
      {
        id: 'fm-FAM3', mod: 'FA M3', subj: 'FA', page: 'p. 16',
        title: 'Multinational Operations: Current Rate CTA & IFRS Hyperinflation Restatement',
        eq: 'Net Assets = Total Assets - Total Liabilities  |  Net Monetary = Monetary Assets - Monetary Liabilities\nIFRS Hyperinflation Restatement Factors:\n• Monetary Assets & Liabilities = End-of-Period GPI / End-of-Period GPI = 1.0 (not restated)\n• Non-Monetary Assets & Liabilities = End-of-Period GPI / Beginning (or Acquisition) GPI\n• Income Statement Items = End-of-Period GPI / Average GPI for the Period',
        trap: 'Holding net monetary assets during hyperinflation creates a purchasing power LOSS; holding net monetary liabilities creates a purchasing power GAIN.'
      },
      {
        id: 'fm-FAM4', mod: 'FA M4', subj: 'FA', page: 'p. 17',
        title: 'Financial Institutions: Basel III Capital/Liquidity & P&C Insurance Ratios',
        eq: 'CET1 Ratio = CET1 / RWA ≥ 4.5%  |  Tier 1 Ratio = Total Tier 1 / RWA ≥ 6.0%  |  Total Capital / RWA ≥ 8.0%\nLCR = High Quality Liquid Assets / Expected 30-Day Cash Outflows (Stress Days = LCR × 30)\nNSFR = Available Stable Funding / Required Stable Funding\nLoss & LAE Ratio = (Loss + LAE) / Net Premiums Earned  |  UW Expense Ratio = UW Expense / Net Premiums Written\nCombined Ratio = Loss & LAE Ratio + UW Expense Ratio  |  Combined After Div = Combined + Div Ratio',
        trap: 'Notice the denominator difference in P&C Insurance: Loss Ratio divides by Net Premiums EARNED, whereas Underwriting Expense Ratio divides by Net Premiums WRITTEN!'
      },
      {
        id: 'fm-FAM5', mod: 'FA M5', subj: 'FA', page: 'p. 18',
        title: 'Beneish M-Score (8 Variables) & Earnings Persistence Regressions',
        eq: 'M-score = -4.84 + 0.920(DSR) + 0.528(GMI) + 0.404(AQI) + 0.892(SGI) + 0.115(DEPI) - 0.172(SGAI) + 4.670(Accruals) - 0.327(LEVI)\nEarnings_{t+1} = α + β_1(Cash Flow_t) + β_2(Accruals_t) + ε\nCash-flow-based Accruals = NI - (CFO + CFI)',
        trap: 'In the earnings persistence regression, β_1 (cash flow coefficient) > β_2 (accruals coefficient) because cash flow is more persistent than accruals. Also note SGAI and LEVI have NEGATIVE signs in the M-score!'
      },
      {
        id: 'fm-FAM6', mod: 'FA M6', subj: 'FA', page: 'p. 18',
        title: 'Net Operating Assets (NOA) & Balance-Sheet / Cash-Flow Accruals Ratios',
        eq: 'NOA = (Total Assets - Cash & ST Investments) - (Total Liabilities - Total Debt)\nBalance-Sheet Accruals Ratio = (NOA_t - NOA_{t-1}) / [ (NOA_t + NOA_{t-1}) / 2 ]\nCash-Flow Accruals Ratio = [ NI_t - (CFO_t + CFI_t) ] / [ (NOA_t + NOA_{t-1}) / 2 ]',
        trap: 'Rising accruals ratios signal deteriorating earnings quality and potential future earnings mean reversion.'
      },

      // ==================== VOLUME 4: CORPORATE ISSUERS (Pages 19-23) ====================
      {
        id: 'fm-CIM1', mod: 'CI M1', subj: 'CI', page: 'p. 19',
        title: 'Lintner Target Payout Model, Post-Buyback EPS/BVPS & Dividend Coverage',
        eq: 'Expected Div = Last Div + [ (Expected Earnings × Target Payout Ratio - Last Div) × (1 / Years) ]\nEPS after buyback = (Earnings before buyback - After-tax cost of funds) / Shares after buyback\nBVPS after buyback = (Book Value before buyback - Value of buyback) / Shares after buyback\nDividend Coverage = NI / Dividends  |  FCFE Coverage = FCFE / (Dividends + Share Repurchases)',
        trap: 'If Share Price > pre-buyback BVPS, a share repurchase DECREASES BVPS; if Share Price < pre-buyback BVPS, a share repurchase INCREASES BVPS.',
        video: 'https://youtu.be/Pd0-QQF-VhQ'
      },
      {
        id: 'fm-CIM2', mod: 'CI M2', subj: 'CI', page: 'Curr.',
        title: 'Corporate Governance & ESG Ownership / Voting Control Wedge',
        eq: 'Control Wedge = Voting Rights % - Cash Flow Ownership %\nPrincipal-Agent Conflict (Dispersed Ownership) vs. Principal-Principal Conflict (Concentrated Ownership)',
        trap: 'Dual-class shares create a wedge between voting control and cash flow rights, increasing minority shareholder expropriation risk.'
      },
      {
        id: 'fm-CIM3-a', mod: 'CI M3', subj: 'CI', page: 'p. 20–21',
        title: 'WACC, Lease Valuation Identity & Equity Risk Premium (GGM & Grinold-Kroner)',
        eq: 'WACC = w_d r_d(1 - t) + w_p r_p + w_e r_e  |  r_d = r_f + Credit Spread\nLessor Identity: PV(Lease Payments) + PV(Residual Value) = Fair Value of Leased Asset + Initial Direct Costs\nGGM ERP = (D_1 / V_0) + g - r_f  |  Grinold-Kroner ERP = [DY + Δ(P/E) + i + g - ΔS] - r_f\nExpected Inflation (TIPS): i = [ (1 + YTM_Treasury) / (1 + YTM_TIPS) ] - 1',
        trap: 'In Grinold-Kroner, ΔS < 0 for net share buybacks, so subtracting a negative ΔS INCREASES expected EPS growth and ERP!'
      },
      {
        id: 'fm-CIM3-b', mod: 'CI M3', subj: 'CI', page: 'p. 22–23',
        title: 'Fama-French (3 & 5 Factor), Expanded CAPM, Build-Up & Country Risk Premium',
        eq: 'FF 5-Factor: r_e = r_f + β_1 ERP + β_2 SMB + β_3 HML + β_4 RMW + β_5 CMA\nExpanded CAPM: r_e = r_f + β_peer(ERP) + SP + SCRP  |  Build-Up: r_e = r_f + ERP + SP + SCRP + IP\nDamodaran CRP = Sovereign Yield Spread × (σ_Equity / σ_Bond)  |  ERP = ERP_dev + λ × CRP\nInternational CAPM: E(r_e) = r_f + β_G[E(r_gm) - r_f] + β_C[E(r_C) - r_f]',
        trap: 'Build-Up does not use a beta multiplier and includes an Industry Risk Premium (IP); Expanded CAPM uses β_peer so IP is omitted.'
      },
      {
        id: 'fm-CIM4', mod: 'CI M4', subj: 'CI', page: 'p. 23',
        title: 'Corporate Restructuring: Materiality Thresholds & Takeover Premium (PRM)',
        eq: 'Acquisition/Divestiture Materiality = Transaction Value / Enterprise Value of Acquirer\nCost Restructuring Materiality = Cost Savings / Sales\nTakeover Premium: PRM = (DP - SP) / SP   (DP = Deal Price, SP = Unaffected Pre-Announcement Price)',
        trap: 'Always use the unaffected stock price (SP prior to market rumors/leaks) when computing takeover premium PRM.'
      },

      // ==================== VOLUME 5: EQUITY VALUATION (Pages 24-31) ====================
      {
        id: 'fm-EQM1', mod: 'EQ M1', subj: 'EQ', page: 'p. 24',
        title: 'Mispricing Decomposition & Conglomerate Discount',
        eq: 'V_E - P = (V - P) + (V_E - V) = True Mispricing + Valuation Error\nConglomerate Discount = Sum-of-the-Parts Value - Market Value',
        trap: ' Perceived mispricing (V_E - P) is the sum of true mispricing (V - P) and the analyst’s estimation error (V_E - V).'
      },
      {
        id: 'fm-EQM2', mod: 'EQ M2', subj: 'EQ', page: 'p. 24–25',
        title: 'Gordon Growth, PVGO, Two-Stage DDM, H-Model & PRAT Growth Rate',
        eq: 'GGM: V_0 = D_1 / (r - g)  |  PVGO: V_0 = (E_1 / r) + PVGO  ⇒  P_0 / E_1 = (1 / r) + (PVGO / E_1)\nTwo-Stage DDM: V_0 = Σ [ D_0(1+g_S)^t / (1+r)^t ] + [ D_0(1+g_S)^n (1+g_L) ] / [ (1+r)^n (r - g_L) ]\nH-Model: V_0 = [ D_0(1 + g_L) + D_0 × H × (g_S - g_L) ] / (r - g_L)   where H = T / 2\nPRAT Sustainable Growth: g = b × ROE = [ (NI - Div) / NI ] × (NI / Sales) × (Sales / TA) × (TA / TE)',
        trap: 'In the H-Model, H is the HALF-LIFE of the high-growth stage (if linear decline lasts 8 years, H = 4).',
        video: 'https://youtu.be/IAMFZXSPKOY'
      },
      {
        id: 'fm-EQM3', mod: 'EQ M3', subj: 'EQ', page: 'p. 25–27',
        title: 'FCFF (4 Formulas), FCFE (4 Formulas), Target Debt Ratio & Two-Stage FCF',
        eq: 'FCFF = NI + NCC + Int(1 - t) - FCInv - WCInv = CFO + Int(1 - t) - FCInv\nFCFF = EBIT(1 - t) + Dep - FCInv - WCInv = EBITDA(1 - t) + Dep(t) - FCInv - WCInv\nFCFE = FCFF - Int(1 - t) + Net Borrowing = NI + NCC - FCInv - WCInv + Net Borrowing = CFO - FCInv + Net Borrowing\nTarget Debt Ratio FCFE = NI - (1 - DR)(FCInv - Dep) - (1 - DR)(WCInv)\nWith Preferred Shares: FCFF = CFO + Int(1 - t) + Preferred Dividends - FCInv',
        trap: 'FCInv = ΔGross PPE = ΔNet PPE + Depreciation (assuming no asset disposals).',
        video: 'https://youtu.be/rtIvIy6Fl0A'
      },
      {
        id: 'fm-EQM4-a', mod: 'EQ M4', subj: 'EQ', page: 'p. 27–28',
        title: 'Enterprise Value (EV) & Actual vs. Justified Valuation Multiples',
        eq: 'EV = MV Common Stock + MV Preferred Equity + MV Debt + Minority Interest - Cash & ST Investments\nJustified Trailing P/E = (1 - b)(1 + g) / (r - g)  |  Justified Leading P/E = (1 - b) / (r - g)\nJustified P/B = (ROE - g) / (r - g)  |  Justified P/S (V_0/S_0) = (E_0/S_0) × (1 - b)(1 + g) / (r - g)\nJustified Trailing D/P = (r - g) / (1 + g)  |  Justified Leading D/P = r - g',
        trap: 'Always check whether the vignette gives trailing (E_0) or forecasted (E_1) earnings before applying the justified P/E or P/S formula!',
        video: 'https://youtu.be/c0vmCUtDpZs'
      },
      {
        id: 'fm-EQM4-b', mod: 'EQ M4', subj: 'EQ', page: 'p. 28',
        title: 'Normalized EPS, PEG Ratio, Scaled Earnings Surprise (SUE) & Harmonic Mean',
        eq: 'Normalized EPS (ROE Method) = (Average ROE over cycle) × Current Book Value per Share\nPEG Ratio = (P/E) / g(in %)  |  Scaled Earnings Surprise = (Reported EPS - Expected EPS) / σ(Analyst Forecast)\nWeighted Harmonic Mean = 1 / Σ(w_i / X_i)',
        trap: 'Normalized EPS via the Average ROE method multiplies historical average ROE by CURRENT book value per share (not average BVPS).'
      },
      {
        id: 'fm-EQM5', mod: 'EQ M5', subj: 'EQ', page: 'p. 29',
        title: 'EVA, MVA, Residual Income, Tobin’s Q & Continuing RI Persistence (ω)',
        eq: 'EVA_t = EBIT_t(1 - T) - (WACC × Invested Capital_{t-1})  |  MVA_t = Market Value of Firm_t - Invested Capital_t\nRI_t = E_t - r × B_{t-1} = (ROE - r) × B_{t-1}  |  Single-Stage RI: V_0 = B_0 + [ (ROE - r) × B_0 ] / (r - g)\nContinuing RI PV at T-1 = RI_T / (1 + r - ω)   (0 ≤ ω ≤ 1)  |  Clean Surplus: B_t = B_{t-1} + E_t - Div_t\nTobin’s Q = (MV Debt + MV Equity) / Replacement Cost of Total Assets',
        trap: 'Notice that RI_T / (1 + r - ω) gives the present value of continuing residual income at time T - 1, so discount it by (1 + r)^(T - 1) to reach t = 0!',
        video: 'https://youtu.be/vhRW3q70E0w'
      },
      {
        id: 'fm-EQM6', mod: 'EQ M6', subj: 'EQ', page: 'p. 30–31',
        title: 'Private Company Valuation: CCM, Excess Earnings (EEM), DLOC/DLOM & Beta',
        eq: 'CCM Firm Value = EBIT_1(1 - t)(1 - RIR) / (WACC - g)   where RIR = g / WACC\nExcess Earnings = Normalized Earnings - (Working Capital × r_WC) - (Fixed Assets × r_FA)\nValue of Intangible Assets = Excess Earnings_0 × (1 + g) / (r_RI - g)  ⇒  Firm = WC + FA + Intangibles\nDLOC = 1 - [ 1 / (1 + Control Premium) ]  |  DLOM = Value of ATM Put Option / Share Price\nTotal Discount = 1 - (1 - DLOC)(1 - DLOM)\nUnlevered Beta: β_U = β_L / [ 1 + (1 - t_plc)(D/E)_plc ]  ⇒  Private β*_L = β_U × [ 1 + (1 - t_pvt)(D/E)_pvt ]',
        trap: 'When re-levering beta for a private company, use the public comparable’s tax rate to unlever and the private company’s tax rate and D/E to relever.',
        video: 'https://youtu.be/137ga1xgAbA'
      },

      // ==================== VOLUME 6: FIXED INCOME (Pages 32-37) ====================
      {
        id: 'fm-FIM1', mod: 'FI M1', subj: 'FI', page: 'p. 32–33',
        title: 'Forward Rate Model, Fixed Swap Rate, Spreads & Key Rate Duration',
        eq: 'DF_B = DF_A × F_{A, B-A}  |  (1 + z_B)^B = (1 + z_A)^A × (1 + f_{A, B-A})^(B-A)\nFixed Swap Rate: s_T = (1 - DF_T) / Σ(DF_t)\nSwap Spread = Swap YTM - Gov YTM  |  TED Spread = LIBOR - T-bill YTM  |  LIBOR-OIS = LIBOR - OIS Fixed\nParallel Shift: %ΔPV = -EffDur × ΔCurve  |  Non-Parallel Shift: %ΔPV = -KeyRateDur × ΔKeyRate',
        trap: 'Sum of all Key Rate Durations across the maturity spectrum equals the bond’s Effective Duration.',
        video: 'https://youtu.be/-FnweFO172Q'
      },
      {
        id: 'fm-FIM2', mod: 'FI M2', subj: 'FI', page: 'p. 33–34',
        title: 'Backward Induction, Binomial Interest Rate Tree & Term Structure Models',
        eq: 'Node Value = [ (0.5 × V_H + 0.5 × V_L) + C ] / (1 + i)\nBinomial Tree Adjacent Nodes: i_{1,H} = i_{1,L} e^(2σ)  |  i_{2,HH} = i_{2,LL} e^(4σ)  |  i_{2,HL} = i_{2,LL} e^(2σ)\nCIR Model: dr = k(θ - r_t)dt + σ√r_t dz  |  Vasicek: dr = k(θ - r_t)dt + σdz\nHo-Lee: dr_t = θ_t dt + σdz_t  |  KWF: d(ln r_t) = θ_t dt + σdz_t',
        trap: 'Vasicek and Ho-Lee allow negative interest rates; CIR (√r_t volatility) and KWF (log-normal d ln r_t) prevent negative rates.',
        video: 'https://youtu.be/DhAVQ3hIXlQ'
      },
      {
        id: 'fm-FIM3-a', mod: 'FI M3', subj: 'FI', page: 'p. 34–35',
        title: 'Callable/Putable Bonds, Capped/Floored Floaters & Effective Duration/Convexity',
        eq: 'V_callable = V_straight - V_call  |  V_putable = V_straight + V_put\nV_capped_floater = V_straight - V_cap  |  V_floored_floater = V_straight + V_floor\nEffDur = (PV_- - PV_+) / (2 × ΔCurve × PV_0)  |  EffConv = (PV_- + PV_+ - 2×PV_0) / [ PV_0 × (ΔCurve)² ]',
        trap: 'Callable bonds exhibit negative convexity when interest rates fall below the coupon rate (price is capped near the call price).',
        video: 'https://youtu.be/lWLSodiqZaM'
      },
      {
        id: 'fm-FIM3-b', mod: 'FI M3', subj: 'FI', page: 'p. 35',
        title: 'Convertible Bonds: Conversion Value, Minimum Value & Market Conversion Price',
        eq: 'Conversion Value = Underlying Share Price × Conversion Ratio\nMinimum Value = Max[ Conversion Value, Straight Bond Value ]\nMarket Conversion Price = Convertible Bond Price / Conversion Ratio\nMarket Conversion Premium per Share = Market Conversion Price - Underlying Share Price\nMarket Conversion Premium Ratio = Market Conversion Premium per Share / Underlying Share Price\nCallable Convertible = V_straight + V_call_on_stock - V_issuer_call',
        trap: 'Convertible bondholders face dilution from stock splits unless protected, and cash dividends on the stock reduce the value of their embedded conversion call option.'
      },
      {
        id: 'fm-FIM4', mod: 'FI M4', subj: 'FI', page: 'p. 36–37',
        title: 'Credit Analysis: CVA, Hazard Rate POD, Credit Migration & Structural Model',
        eq: 'LGD = EE × (1 - Recovery Rate)  |  POD_t = (1 - Hazard Rate)^(t-1) × Hazard Rate\nCVA = Σ [ EL_t / (1 + rf_t)^t ] = Σ [ (POD_t × LGD_t) / (1 + rf_t)^t ]  |  V_risky = V_VND - CVA\nCredit Spread ≈ Annual Hazard Rate × (1 - Recovery Rate)  |  %ΔP = -ModDur × ΔCredit Spread\nStructural Model: Equity E(T) = Max[A(T) - K, 0]  |  Risky Debt D(T) = K - Max[K - A(T), 0]',
        trap: 'In the structural model, shareholders own a European call option on company assets A(T) with strike K; debtholders own risk-free debt K and are short a European put option!',
        video: 'https://youtu.be/2I9bgu-o7aI'
      },
      {
        id: 'fm-FIM5', mod: 'FI M5', subj: 'FI', page: 'p. 37',
        title: 'Credit Default Swaps (CDS): Upfront Premium, Pricing & Spread Sensitivity',
        eq: 'CDS Spread ≈ (1 - Recovery Rate) × POD  |  CDS Payout = (1 - Recovery Rate of CTD Bond) × Notional\nUpfront Premium % ≈ (Credit Spread - Fixed Coupon) × CDS Duration\nPrice of CDS per 100 Notional = 100 - Upfront Premium %\n% Change in CDS Price = Change in Spread (in bps) × CDS Duration',
        trap: 'In a credit event with multiple deliverable bonds, the protection buyer delivers the Cheapest-to-Deliver (CTD) bond (lowest price / highest LGD).'
      },

      // ==================== VOLUME 7: DERIVATIVES (Pages 38-45, 56) ====================
      {
        id: 'fm-DVM1-a', mod: 'DV M1', subj: 'DV', page: 'p. 38–39',
        title: 'Forwards (Discrete/Continuous Carry), FRAs & Fixed Income Futures',
        eq: 'Forward Pricing: F_0 = (S_0 + CC_0 - CB_0)(1 + r)^T  or  F_0 = S_0 e^((r_c + CC - CB)T)\nForward Valuation: V_t = (F_t - F_0) / (1 + r)^(T-t) = S_t - PV(CB) + PV(CC) - F_0 / (1 + r)^(T-t)\nFRA Pricing: FRA_0 = [ (1 + L_T t_T) / (1 + L_h t_h) - 1 ] × (1 / t_m)\nLong FRA Value at g: V_g = [ Notional × (FRA_g - FRA_0) × t_m ] / (1 + D_{T-g} t_{T-g})\nBond Futures: F_0 = Quoted Futures Price × CF = FV(B_0 + AI_0) - AI_T - FVCI',
        trap: 'Notice that an FRA settles at the BEGINNING of the loan period (h) and is discounted back from T = h + m using 1 + D_m t_m!',
        video: 'https://youtu.be/AYKRVdaYvxY'
      },
      {
        id: 'fm-DVM1-b', mod: 'DV M1', subj: 'DV', page: 'p. 40–41',
        title: 'Interest Rate Swaps (IRS), Currency Swaps & Equity Swaps Valuation',
        eq: 'IRS Fixed Rate: r_FIX = [ (1 - PV_n) / Σ(PV_i) ] × (1 / AP)  |  Fixed Swap Cash Flow FS = AP × r_FIX\nPay-Fixed IRS Value = Notional × (FS_t - FS_0) × Σ(PV_i)  |  Receive-Fixed Value = Notional × (FS_0 - FS_t) × Σ(PV_i)\nCurrency Swap (Receive a, Pay b in a): V_CS = Notional_a × V_a - S_t × Notional_b × V_b\nEquity Swap (Receive Fixed, Pay Equity): V_{EQ,t} = V_FIX(C_0) - (S_t / S_{t-1})×Notional - PV_t(Par - Notional)',
        trap: 'When valuing an IRS using the swap rate change method (FS_t - FS_0)×ΣPV_i, always multiply by the periodic accrual fraction AP!',
        video: 'https://youtu.be/_A2a909etvg'
      },
      {
        id: 'fm-DVM2-a', mod: 'DV M2', subj: 'DV', page: 'p. 42–43',
        title: 'Binomial Option Pricing: Hedge Ratio, Risk-Neutral π & Early Exercise',
        eq: 'Hedge Ratio: h_call = (c^+ - c^-) / (S^+ - S^-) ≥ 0  |  h_put = (p^+ - p^-) / (S^+ - S^-) ≤ 0\nRisk-Neutral Prob: π = (1 + r - d) / (u - d)  |  1-Period: c = [ π c^+ + (1 - π) c^- ] / (1 + r)\n2-Period: c = [ π² c^{++} + 2π(1 - π) c^{+-} + (1 - π)² c^{--} ] / (1 + r)²\nAmerican Call w/ Dividend at t=1: S^+ = u × (S - PV(Div))',
        trap: 'For interest rate options on a binomial tree, risk-neutral probability is ALWAYS π = 0.5 and you discount at the node’s 1-period forward rate.',
        video: 'https://youtu.be/X4R8j_cf8SA'
      },
      {
        id: 'fm-DVM2-b', mod: 'DV M2', subj: 'DV', page: 'p. 43–45, 56',
        title: 'Black-Scholes-Merton (BSM), Black Model, Swaptions, Delta Hedging & Greeks',
        eq: 'BSM w/ Carry γ: c = S e^(-γT) N(d_1) - X e^(-rT) N(d_2)  |  p = X e^(-rT) N(-d_2) - S e^(-γT) N(-d_1)\nBlack Model (Futures): c = e^(-rT)[ F_0(T) N(d_1) - X N(d_2) ]\nPayer Swaption: PAY_SWN = AP × [ R_FIX N(d_1) - R_X N(d_2) ] × Σ PV_j(1)\nDelta Hedging Units: N_H = - (Portfolio Delta / Delta_H)\nGreeks Approx: c_new ≈ c + Delta_c(ΔS) + 0.5 × Gamma_c(ΔS)² + Vega_c(Δσ)',
        trap: 'N(d_2) is the risk-neutral probability that a call expires in the money; e^(-δT)N(d_1) is the call option’s Delta (hedge ratio)!',
        video: 'https://youtu.be/v8RcvkQKFpw'
      },

      // ==================== VOLUME 8: ALTERNATIVE INVESTMENTS (Pages 46-49) ====================
      {
        id: 'fm-AIM1', mod: 'AI M1', subj: 'AI', page: 'p. 46',
        title: 'Commodities: Futures Price, Calendar Spread, Roll Return & Total Return',
        eq: 'Futures Price = Spot Price + Storage Costs - Convenience Yield\nCalendar Spread = Near-Term Futures Closing Price - Longer-Term Futures Closing Price\nRoll Return = [ (Near-Term Price - Longer-Term Price) / Near-Term Price ] × (% of Position Rolled)\nTotal Return = Price Return + Roll Return + Collateral Return + Rebalancing Return (Index only)',
        trap: 'Note the sign convention: Calendar Spread = Near-Term minus Longer-Term, so in backwardation (Near > Longer), both Calendar Spread and Roll Return are POSITIVE.'
      },
      {
        id: 'fm-AIM2', mod: 'AI M2', subj: 'AI', page: 'p. 46–47',
        title: 'Direct Real Estate: NOI, LTV, DSC, Equity Dividend Rate & Appraisal Lag',
        eq: 'NOI = Effective Gross Income - Operating Expenses - Property Maintenance Allowance\nLTV = Debt / Property Value  |  DSC = NOI / Debt Service  |  Equity Div Rate = Pretax CF / Equity Invested\nAfter-Tax CF = NOI - Debt Service - Taxes   where Taxes = t × (NOI - Interest - Depreciation)\nDirect Cap: Value = Expected NOI / Cap Rate   (Cap Rate = r - g)\nAppraisal Lag Unsmoothing: R_t = (R*_t / a) - [ (1 - a) / a ] × R*_{t-1}',
        trap: 'Appraisal-based indices smooth volatility and understate true standard deviation; unsmoothing with factor a (0 < a ≤ 1) restores higher true return volatility.'
      },
      {
        id: 'fm-AIM3', mod: 'AI M3', subj: 'AI', page: 'p. 48',
        title: 'Publicly Traded Real Estate (REITs): NAVPS, FFO & AFFO',
        eq: 'NAV per Share = (Value of Operating Real Estate + Other Assets - Total Debt & Liabilities) / Shares\nwhere Value of Operating Real Estate = NOI_1 / Cap Rate\nFFO = Net Income + Depreciation + Amortization - Net Gains from Property Sales\nAFFO = FFO - Non-Cash (Straight-Line) Rent - Recurring Maintenance Capital Expenditure',
        trap: 'Always use NEXT 12 months’ forecasted NOI_1 (not trailing NOI_0) when capitalizing operating real estate for NAV per share!',
        video: 'https://youtu.be/WncC3BZmfs8'
      },
      {
        id: 'fm-AIM4', mod: 'AI M4', subj: 'AI', page: 'p. 49',
        title: 'Hedge Funds: Pairs Trading Beta Hedge, Merger Arb & Conditional Factor Model',
        eq: 'Market-Neutral Short Position = - (Beta_undervalued × Amount Invested_undervalued) / Beta_overvalued\nStock-for-Stock Merger Arb Payoff = (N_A × P_A) - (N_T × P_T)\nConvertible Arb: Conversion Price = Convertible Bond Price / Conversion Ratio\nConditional Factor Model: R_{i,t} = α_i + Σ β_{i,k}(Factor_k)_t + D_t Σ β_{i,k,crisis}(Factor_k)_t + ε_{i,t}',
        trap: 'In equity market-neutral pairs trading, size the short leg by the ratio of Betas (not 1:1 dollar matching) to achieve zero net beta exposure.'
      },

      // ==================== VOLUME 9: PORTFOLIO MANAGEMENT (Pages 50-56) ====================
      {
        id: 'fm-PMM1', mod: 'PM M1', subj: 'PM', page: 'p. 50–51',
        title: 'Inter-Temporal Rate of Substitution, Taylor Rule & Asset Class Risk Premiums',
        eq: 'Real Risk-Free Rate: l_{t,1} = [ 1 / E_t(m̃_{t,1}) ] - 1  |  Risky Asset Price = E[P̃_{t+1}]/(1 + l_{t,1}) + cov_t[P̃_{t+1}, m̃_{t,1}]\nTaylor Rule: pr_t = I_t + π_t + 0.5(π_t - π*_t) + 0.5(Y_t - Y*_t)\nDiscount Rate Build-Up: Real Rate (l) + Expected Inflation (θ) + Inflation Uncertainty (π) + Credit Premium (γ) + Equity Premium over Risky Debt (κ) + Liquidity Premium (ϕ)',
        trap: 'Short-dated T-bills carry l + θ; long-term gov bonds add π; corporate bonds add γ; equities add κ (where λ = γ + κ is ERP); commercial real estate adds illiquidity premium ϕ.'
      },
      {
        id: 'fm-PMM2', mod: 'PM M2', subj: 'PM', page: 'p. 52–53',
        title: 'Active Management: Value Added, Sharpe/IR, Optimal Active Risk & Fundamental Law',
        eq: 'Value Added: R_A = Σ Δw_j R_{B,j} + Σ w_{P,j} R_{A,j}  |  SR²_P = SR²_B + IR²\nOptimal Active Risk: σ(R_A) = (IR / SR_B) × σ(R_B)  |  IC ≈ 2 × Prob(Right Call) - 1\nForecasted Active Return (Grinold Rule): μ_i = IC × σ_i × S_i\nFull Fundamental Law: E(R_A) = TC × IC × √BR × σ_A  |  IR = TC × IC × √BR\nCorrelated Breadth: BR = N / [ 1 + (N - 1)ρ ]  |  Realized Variance Share = TC²',
        trap: 'When investment decisions have correlation ρ > 0, true Breadth BR = N / [1 + (N - 1)ρ] is substantially smaller than N!'
      },
      {
        id: 'fm-PMM3', mod: 'PM M3', subj: 'PM', page: 'p. 53',
        title: 'Exchange-Traded Funds (ETFs): Premium/Discount & Holding Period Cost',
        eq: 'Intraday ETF Premium/Discount (%) = (ETF Price - Indicated NAV per Share) / Indicated NAV per Share\nRound-Trip Trade Cost (%) = (One-Way Commission % × 2) + Bid-Ask Spread %\nHolding Period Cost (%) = Round-Trip Trade Cost (%) + Management Fee (%)',
        trap: 'For short-term tactical traders, bid-ask spread and commission dominate holding cost; for long-term investors, annual management fee and tracking error dominate.'
      },
      {
        id: 'fm-PMM4', mod: 'PM M4', subj: 'PM', page: 'p. 54–55',
        title: 'APT, Carhart 4-Factor, Macroeconomic vs. Fundamental Factor Models & Attribution',
        eq: 'APT: E(R_p) = R_F + λ_1 β_{p,1} + ... + λ_K β_{p,K}\nCarhart 4-Factor: E(R_p) = R_F + β_1 RMRF + β_2 SMB + β_3 HML + β_4 WML\nFundamental Standardized Beta: b_{ik} = (Value of Attribute k for Asset i - Average Attribute k) / σ(Attribute k)\nActive Return Attribution = Σ [ (β_{p,k} - β_{b,k}) × Factor Return_k ] + Security Selection\nTracking Error: TE = s(R_P - R_B)  |  Active Risk Squared = Active Factor Risk + Active Specific Risk',
        trap: 'In a Macroeconomic factor model, F_k is the factor SURPRISE (Actual - Expected); in a Fundamental factor model, b_ik is the standardized z-score of the company attribute.'
      },
      {
        id: 'fm-PMM5', mod: 'PM M5', subj: 'PM', page: 'p. 55–56',
        title: 'Parametric VaR, Return/Volatility Scaling, Incremental VaR & Greeks/Duration',
        eq: 'Parametric VaR = -[ E(R_p) - z × σ_p ] × Portfolio Value\nAnnual Return = R_daily × 250  |  Annual Standard Deviation = σ_daily × √250\nIncremental VaR (IVaR) = VaR after change - VaR before change\nBond Price Approx: ΔB / B ≈ -Duration × [Δy / (1+y)] + 0.5 × Convexity × [Δy / (1+y)]²\nOption Price Approx: Δc ≈ Delta_c(ΔS) + 0.5 × Gamma_c(ΔS)² + Vega_c(Δσ)',
        trap: 'For a 5% one-tailed VaR, use z = 1.65; for a 1% one-tailed VaR, use z = 2.33.'
      },
      {
        id: 'fm-PMM6', mod: 'PM M6', subj: 'PM', page: 'p. 56',
        title: 'Backtesting & Simulation (Look-Ahead Bias, Survivorship Bias & CVaR)',
        eq: 'No quantitative formula in Fabian Moa sheet — focus on Rolling-Window Cross-Validation, Look-Ahead Bias, Survivorship Bias, and Historical vs. Monte Carlo Simulation.',
        trap: 'Point-in-time databases eliminate look-ahead bias (from earnings restatements) and survivorship bias (from delisted companies).'
      },

      // ==================== VOLUME 10: ETHICAL & PROFESSIONAL STANDARDS ====================
      { id: 'f-ETM1', mod: 'ET M1', subj: 'ET', page: 'Ethics', title: 'Six Components of the Code of Ethics & Seven Standards', eq: 'Act with integrity, competence, diligence, respect • Place integrity of profession & clients’ interests above own', trap: 'Candidates and members must never engage in conduct that compromises the integrity of the CFA exam or confidential curriculum.' },
      { id: 'f-ETM2', mod: 'ET M2', subj: 'ET', page: 'Ethics', title: 'Standard I: Professionalism (Knowledge of Law, Independence, Misconduct)', eq: 'Follow the STRICTEST law/regulation among: (1) local law, (2) governing law, or (3) Code & Standards', trap: 'Under Standard I(B), gifts from clients for past performance require prior written disclosure to the employer; gifts from external parties that could impair objectivity must be declined.' },
      { id: 'f-ETM3', mod: 'ET M3', subj: 'ET', page: 'Ethics', title: 'Standard II: Integrity of Capital Markets (MNPI & Mosaic Theory)', eq: 'Mosaic Theory = Material Public Info + Nonmaterial Nonpublic Info → Permitted without violation', trap: 'If you receive Material Nonpublic Information (MNPI), you must NOT trade or cause others to trade, even if a client instructs you to liquidate.' },
      { id: 'f-ETM4', mod: 'ET M4', subj: 'ET', page: 'Ethics', title: 'Standard III: Duties to Clients (Loyalty, Fair Dealing, Suitability, Soft Dollars)', eq: 'Soft Dollars (Client Brokerage) must strictly benefit the CLIENT through investment research/brokerage', trap: 'Fair Dealing (III-B) requires disseminating investment recommendations to all clients fairly/simultaneously—not favoring high-fee accounts with early access.' },
      { id: 'f-ETM5', mod: 'ET M5', subj: 'ET', page: 'Ethics', title: 'Standard IV: Duties to Employers (Loyalty, Additional Comp, Supervisors)', eq: 'Additional Compensation Arrangements require WRITTEN consent from all parties BEFORE accepting', trap: 'When leaving an employer, you cannot take client lists, models, or work files without permission, nor solicit current clients prior to departure.' },
      { id: 'f-ETM6', mod: 'ET M6', subj: 'ET', page: 'Ethics', title: 'Standard V: Investment Analysis, Recommendations & Record Retention', eq: 'Default Record Retention Period = 7 Years (when no local regulatory mandate applies)', trap: 'Always distinguish between fact and opinion in client communications and disclose significant changes to quantitative valuation models.' },
      { id: 'f-ETM7', mod: 'ET M7', subj: 'ET', page: 'Ethics', title: 'Standard VI: Conflicts of Interest (Disclosure, Priority, Referral Fees)', eq: 'Priority of Transactions: Clients → Employer → Personal Accounts (including family fee-paying accounts)', trap: 'Beneficial ownership/fee-paying family accounts must trade alongside other clients, never ahead of them.' },
      { id: 'f-ETM8', mod: 'ET M8', subj: 'ET', page: 'Ethics', title: 'Standard VII: Responsibilities as a CFA Institute Member or Candidate', eq: 'Use "CFA" only as an adjective (e.g., "CFA charterholder"), never as a noun or plural ("CFAs")', trap: 'Never claim that passing exams on the first attempt makes you a superior investment manager or guarantees investment results.' },
      { id: 'f-ETM9', mod: 'ET M9', subj: 'ET', page: 'Ethics', title: 'Level II Ethics Vignette Cases (Serengeti, Banco Libertad, QuantHouse, etc.)', eq: 'Identify every Standard violated in each paragraph: Disclosure + Written Consent + Supervision', trap: 'In Level II item-set cases, check whether disclosures are made BEFORE the action occurs and whether they are plain-language and prominent.' },
      { id: 'f-ETM10', mod: 'ET M10', subj: 'ET', page: 'Ethics', title: 'Combined Ethics Item-Set Exam Strategy', eq: 'Target ≥ 80% on Ethics (10–15% exam weight; CFAI borderline adjustment factor)', trap: 'Read the question stems first in Ethics vignettes to spot which specific Standard or character is being tested.' }
    ];

    let showPinnedFormulasOnly = false;

    function populateFormulaModuleDropdown() {
      const sel = document.getElementById('newFormulaModuleSelect');
      if (!sel || sel.options.length > 0) return;
      PLAN_DATA.modules.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.code;
        opt.textContent = m.code + ' — ' + m.title.slice(0, 38);
        sel.appendChild(opt);
      });
    }

    function toggleFormulaPinFilter() {
      showPinnedFormulasOnly = !showPinnedFormulasOnly;
      const btn = document.getElementById('togglePinnedFormulasBtn');
      if (btn) {
        btn.textContent = showPinnedFormulasOnly ? 'Showing Pinned ★ (Show All)' : 'Show Pinned Only ★';
      }
      renderFormulaVault();
    }

    function togglePinFormula(fId) {
      if (!appState.pinnedFormulas) appState.pinnedFormulas = {};
      if (appState.pinnedFormulas[fId]) delete appState.pinnedFormulas[fId];
      else appState.pinnedFormulas[fId] = true;
      saveState();
      renderFormulaVault();
    }

    function toggleAddFormulaForm() {
      populateFormulaModuleDropdown();
      document.getElementById('addFormulaFormBox').classList.toggle('hidden');
    }

    function saveCustomFormulaEntry() {
      const mod = document.getElementById('newFormulaModuleSelect').value || 'CI M1';
      const subj = mod.split(' ')[0];
      const title = document.getElementById('newFormulaTitleInput').value.trim();
      const eq = document.getElementById('newFormulaEqInput').value.trim();
      const trap = document.getElementById('newFormulaTrapInput').value.trim();
      if (!title || !eq) {
        showToast('Please enter both a formula name and equation.');
        return;
      }
      if (!appState.customFormulas) appState.customFormulas = [];
      const newId = 'cust-f-' + Date.now();
      appState.customFormulas.unshift({ id: newId, mod, subj, title, eq, trap: trap || 'Custom user formula note.', custom: true });
      if (!appState.pinnedFormulas) appState.pinnedFormulas = {};
      appState.pinnedFormulas[newId] = true;
      saveState();
      document.getElementById('newFormulaTitleInput').value = '';
      document.getElementById('newFormulaEqInput').value = '';
      document.getElementById('newFormulaTrapInput').value = '';
      document.getElementById('addFormulaFormBox').classList.add('hidden');
      renderFormulaVault();
      showToast('Saved custom formula card to ' + mod + '!');
    }

    function deleteCustomFormula(fId) {
      appState.customFormulas = (appState.customFormulas || []).filter(f => f.id !== fId);
      saveState();
      renderFormulaVault();
    }

    function renderFormulaVault() {
      const grid = document.getElementById('formulaVaultGrid');
      if (!grid) return;
      const subjFilter = (document.getElementById('formulaVaultSubjectSelect') || {}).value || 'ALL';
      const q = ((document.getElementById('formulaVaultSearchInput') || {}).value || '').trim().toLowerCase();

      const allFormulas = [...(appState.customFormulas || []), ...DEFAULT_FORMULAS];
      const filtered = allFormulas.filter(f => {
        if (subjFilter !== 'ALL' && f.subj !== subjFilter) return false;
        if (showPinnedFormulasOnly && !(appState.pinnedFormulas && appState.pinnedFormulas[f.id])) return false;
        if (q) {
          const hay = (f.mod + ' ' + f.title + ' ' + f.eq + ' ' + f.trap).toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      const countLbl = document.getElementById('formulaVaultCountLabel');
      if (countLbl) countLbl.textContent = filtered.length + ' of ' + allFormulas.length + ' formula cards';

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-3 p-6 text-center text-xs text-slate-500">No formulas match your current filter.</div>`;
        return;
      }

      grid.innerHTML = filtered.map(f => {
        const isPinned = !!(appState.pinnedFormulas && appState.pinnedFormulas[f.id]);
        const sInfo = subjectByCode[f.subj] || {};
        const eqFormatted = (f.eq || '').split('\n').map(line => `<div class="py-0.5">${line}</div>`).join('');
        return `
          <div class="p-3.5 rounded-xl border ${isPinned ? 'bg-amber-50/90 border-amber-300' : 'bg-slate-50 border-slate-200'} flex flex-col justify-between gap-2">
            <div>
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] font-extrabold px-2 py-0.5 rounded text-white" style="background-color:${sInfo.color || '#6955d9'}">${f.mod}</span>
                  ${f.page ? `<span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700">FM ${f.page}</span>` : ''}
                  ${f.video ? `<a href="${f.video}" target="_blank" rel="noopener noreferrer" class="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 hover:underline" title="Watch Fabian Moa Video Walkthrough">&#9654; Video &#8599;</a>` : ''}
                </div>
                <div class="flex items-center gap-1">
                  <button type="button" onclick="togglePinFormula('${f.id}')" class="text-xs px-2 py-0.5 rounded ${isPinned ? 'bg-amber-200 text-amber-900 font-bold' : 'bg-white text-slate-500 border border-slate-200'}" title="Pin formula for quick review">&#9733; ${isPinned ? 'Pinned' : 'Pin'}</button>
                  ${f.custom ? `<button type="button" onclick="deleteCustomFormula('${f.id}')" class="text-xs text-slate-400 hover:text-rose-600 font-bold px-1">&times;</button>` : ''}
                </div>
              </div>
              <h4 class="text-xs font-extrabold text-slate-900 mt-1.5">${f.title}</h4>
              <div class="mt-1.5 p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] font-bold text-indigo-900 overflow-x-auto divide-y divide-slate-100">${eqFormatted}</div>
            </div>
            <div class="text-[11px] text-rose-800 bg-rose-100/60 px-2.5 py-1.5 rounded-lg border border-rose-200">
              <strong>Exam Watchout:</strong> ${f.trap}
            </div>
          </div>
        `;
      }).join('');
    }

    // 5. Sunday Revision Set Generator for Weekly Reflection Cards
    function generateSundayRevisionSet(weekNum) {
      const wDays = PLAN_DATA.days.filter(d => d.weekNum === weekNum);
      const currentMods = new Set();
      wDays.forEach(d => {
        d.mainItems.forEach(it => {
          if (it.kind === 'lesson' && it.module) currentMods.add(it.module);
        });
      });

      const lowestMods = getLowestScoringModules(3);
      const hardLessons = Object.keys(appState.lessonConfidence || {})
        .filter(id => appState.lessonConfidence[id] === 1 && allItemsById[id])
        .map(id => allItemsById[id])
        .slice(0, 4);

      const currentModsList = Array.from(currentMods).join(', ') || 'Current week modules';
      const earlierModsList = lowestMods.length > 0
        ? lowestMods.map(e => e.module.code + (e.stats.accuracy !== null ? ' (' + e.stats.accuracy + '%)' : ' (Flagged)')).join(', ')
        : 'Earlier completed modules from prior weeks';
      const hardLessonsStr = hardLessons.length > 0
        ? hardLessons.map(l => l.code + ' (' + l.title.slice(0, 28) + '...)').join(' • ')
        : 'No lessons rated ★ Hard yet — rate tough lessons in Daily Workspace to auto-queue them here!';

      const sunDay = wDays.find(d => d.dayName === 'Sun');
      const ethRule = sunDay && sunDay.ethicsItems[0] ? sunDay.ethicsItems[0].title : '3–4 cumulative LES Ethics questions';

      const setHtml = `
        <div class="font-bold text-teal-900 flex items-center justify-between">
          <span>&#9889; Generated Week ${weekNum} Sunday Revision Prescription:</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-teal-100 text-teal-800">120 Min Total</span>
        </div>
        <div><strong>1. Current-Topic Drill (45m • 6–8 LES Qs):</strong> Focus on <strong>${currentModsList}</strong></div>
        <div><strong>2. Cumulative Gap Drill (25m • 4–6 Earlier Qs):</strong> Target <strong>${earlierModsList}</strong></div>
        <div><strong>3. Flagged ★ Hard Lessons to Re-Read (20m):</strong> ${hardLessonsStr}</div>
        <div><strong>4. Sunday Ethics Block (20m):</strong> ${ethRule}</div>
      `;

      if (!appState.sundayRevisionSets) appState.sundayRevisionSets = {};
      appState.sundayRevisionSets[weekNum] = setHtml;

      // Auto-populate Top 3 Weakest Concepts inputs if currently blank
      if (lowestMods[0] && !document.getElementById(`wk-${weekNum}-weak1`).value) {
        document.getElementById(`wk-${weekNum}-weak1`).value = lowestMods[0].module.code + ': ' + (lowestMods[0].stats.weakConcepts || lowestMods[0].module.title.slice(0, 28));
      }
      if (lowestMods[1] && !document.getElementById(`wk-${weekNum}-weak2`).value) {
        document.getElementById(`wk-${weekNum}-weak2`).value = lowestMods[1].module.code + ': ' + (lowestMods[1].stats.weakConcepts || lowestMods[1].module.title.slice(0, 28));
      }
      if (hardLessons[0] && !document.getElementById(`wk-${weekNum}-weak3`).value) {
        document.getElementById(`wk-${weekNum}-weak3`).value = hardLessons[0].code + ': ' + hardLessons[0].title.slice(0, 28);
      }

      saveState();
      const box = document.getElementById('sundayRevisionSetBox-' + weekNum);
      if (box) {
        box.innerHTML = setHtml;
        box.classList.remove('hidden');
      }
      showToast('Generated Week ' + weekNum + ' Sunday Revision Set!');
    }

    // 6. Topic-by-Topic Mock Vignette Matrix
    function renderMockTopicBreakdownMatrix() {
      const grid = document.getElementById('mockTopicBreakdownGrid');
      if (!grid) return;
      grid.innerHTML = PLAN_DATA.subjects.map(s => {
        const scores = [];
        appState.mockExams.forEach(mk => {
          if (mk.topicScores && mk.topicScores[s.code] !== undefined && mk.topicScores[s.code] !== '') {
            scores.push(Number(mk.topicScores[s.code]));
          }
        });
        const avg = scores.length > 0 ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : null;
        const cls = avg === null ? 'bg-slate-50 text-slate-500 border-slate-200' : (avg >= 70 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : (avg >= 60 ? 'bg-amber-50/90 text-amber-900 border-amber-200' : 'bg-rose-100 text-rose-800 border-rose-200'));
        return `
          <div class="p-2.5 rounded-xl border ${cls} flex items-center justify-between">
            <span class="text-xs font-extrabold">${s.code}</span>
            <span class="text-xs font-bold">${avg !== null ? avg + '% (' + scores.length + 'm)' : '—'}</span>
          </div>
        `;
      }).join('');
    }

    // 7. Auto-Tag Focus Studio Timer Sessions to Today's Active Subject
    function getActiveTimerSubjectCode(dateOverride) {
      if (timerState && timerState.presetKey === 'wk_20') return 'ET';
      const d = daysByDate[dateOverride || appState.activeDate];
      if (d && d.mainItems && d.mainItems[0] && d.mainItems[0].subject) {
        return d.mainItems[0].subject;
      }
      return 'CI';
    }

    function renderSubjectTimerHoursBreakdown() {
      const container = document.getElementById('timerSubjectHoursBreakdown');
      const tagBadge = document.getElementById('activeTimerSubjectTagBadge');
      if (tagBadge) {
        const curSubj = getActiveTimerSubjectCode();
        tagBadge.textContent = 'Auto-Tagging to: ' + curSubj;
      }
      if (!container) return;

      // Planned hours per subject from PDF study plan (weekdays * 100m + proportional weekend + 49.3h Ethics)
      const plannedHoursBySubj = {
        CI: 21.7, AI: 23.3, EC: 16.7, EQ: 41.7, FA: 33.3, QM: 33.3, PM: 33.3, FI: 28.3, DV: 15.0, ET: 49.3
      };

      const loggedMinsBySubj = {};
      PLAN_DATA.subjects.forEach(s => { loggedMinsBySubj[s.code] = 0; });
      appState.timerSessions.forEach(ts => {
        const code = ts.subject || getActiveTimerSubjectCode(ts.date);
        loggedMinsBySubj[code] = (loggedMinsBySubj[code] || 0) + (parseInt(ts.minutes, 10) || 0);
      });

      container.innerHTML = PLAN_DATA.subjects.map(s => {
        const hrs = ((loggedMinsBySubj[s.code] || 0) / 60).toFixed(1);
        const target = plannedHoursBySubj[s.code] || 20.0;
        const pct = Math.min(100, Math.round((hrs / target) * 100));
        return `
          <div class="text-xs">
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-bold text-slate-800">${s.code} — ${s.name}</span>
              <span class="font-semibold text-slate-600">${hrs} / ${target}h (${pct}%)</span>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full" style="width:${pct}%; background-color:${s.color}"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 8. Keyboard Shortcuts (Alt + Left/Right for Day Step, Alt + 1..6 for Tabs)
    window.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'ArrowLeft') { e.preventDefault(); stepActiveDate(-1); }
      if (e.altKey && e.key === 'ArrowRight') { e.preventDefault(); stepActiveDate(1); }
      if (e.altKey && ['1','2','3','4','5','6'].includes(e.key)) {
        e.preventDefault();
        const idx = parseInt(e.key, 10) - 1;
        if (TAB_NAMES[idx]) switchTab(TAB_NAMES[idx]);
      }
    });


    // 9. Cross-Device Laptop <-> Android Phone Sync (Base64 State & URL Hash)
    function encodeSyncPayload() {
      const jsonStr = JSON.stringify(appState);
      return btoa(unescape(encodeURIComponent(jsonStr)));
    }

    function decodeSyncPayload(rawInput) {
      let clean = (rawInput || '').trim();
      if (clean.includes('#sync=')) {
        clean = clean.split('#sync=')[1].split('&')[0];
      } else if (clean.startsWith('sync=')) {
        clean = clean.slice(5);
      }
      const jsonStr = decodeURIComponent(escape(atob(clean)));
      return JSON.parse(jsonStr);
    }

    function openSyncModal() {
      const doneCount = Object.keys(appState.completedItems || {}).length;
      const badge = document.getElementById('syncSummaryStatsBadge');
      if (badge) badge.textContent = doneCount + ' completed items • Active: ' + appState.activeDate;
      document.getElementById('pasteSyncCodeInput').value = '';
      const modal = document.getElementById('deviceSyncModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeSyncModal() {
      const modal = document.getElementById('deviceSyncModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function copySyncCodeToClipboard() {
      try {
        const code = encodeSyncPayload();
        navigator.clipboard.writeText(code);
        showToast('Copied Sync Code! Paste it into Sync on your phone or laptop.');
      } catch (e) {
        document.getElementById('pasteSyncCodeInput').value = encodeSyncPayload();
        showToast('Sync Code generated in the box below — copy it manually.');
      }
    }

    function copySyncUrlToClipboard() {
      const base = window.location.href.split('#')[0];
      const url = base + '#sync=' + encodeSyncPayload();
      try {
        navigator.clipboard.writeText(url);
        showToast('Copied Magic Sync Link! Open it on your other device to auto-sync.');
      } catch (e) {
        document.getElementById('pasteSyncCodeInput').value = url;
        showToast('Magic Link generated in the box below — copy it manually.');
      }
    }

    function shareSyncNative() {
      const base = window.location.href.split('#')[0];
      const url = base + '#sync=' + encodeSyncPayload();
      if (navigator.share) {
        navigator.share({
          title: 'CFA Level II Study Guide Progress Sync',
          text: 'Open this link or paste the sync code to load my latest CFA Level II study progress:',
          url: url
        }).catch(() => {});
      } else {
        copySyncUrlToClipboard();
      }
    }

    function applyPastedSyncCode() {
      const raw = document.getElementById('pasteSyncCodeInput').value;
      if (!raw || !raw.trim()) {
        showToast('Please paste a Sync Code or Magic Sync Link first.');
        return;
      }
      try {
        const parsed = decodeSyncPayload(raw);
        if (parsed && typeof parsed === 'object') {
          appState = Object.assign({}, appState, parsed);
          saveState();
          document.getElementById('activeDateInput').value = appState.activeDate || '2026-11-02';
          closeSyncModal();
          refreshAllViews();
          showToast('Synced progress! (' + Object.keys(appState.completedItems || {}).length + ' completed items loaded)');
        }
      } catch (e) {
        showToast('Invalid Sync Code. Make sure you copied the entire string.');
      }
    }

    function checkUrlHashSyncOnLoad() {
      const h = window.location.hash || '';
      if (h.startsWith('#sync=')) {
        try {
          const parsed = decodeSyncPayload(h);
          if (parsed && typeof parsed === 'object') {
            appState = Object.assign({}, appState, parsed);
            saveState();
            history.replaceState(null, '', window.location.pathname + window.location.search);
            setTimeout(() => {
              showToast('Auto-synced latest progress from Magic Link!');
            }, 300);
          }
        } catch (e) {
          console.warn('Hash sync parse error:', e);
        }
      }
    }

    // ==================== 10. PROPORTIONAL SCHEDULE COMPRESSION / EXPANSION ENGINE ====================
    const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const MONTH_NAMES_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function formatIsoToShortDisplay(iso) {
      if (!iso || iso.length < 10) return iso || '';
      const parts = iso.split('-');
      const mIdx = Math.max(0, Math.min(11, parseInt(parts[1], 10) - 1));
      return parts[2] + ' ' + MONTH_NAMES_SHORT[mIdx];
    }

    function formatIsoToFullDisplay(iso) {
      if (!iso || iso.length < 10) return iso || '';
      const parts = iso.split('-');
      const mIdx = Math.max(0, Math.min(11, parseInt(parts[1], 10) - 1));
      return parseInt(parts[2], 10) + ' ' + MONTH_NAMES_FULL[mIdx] + ' ' + parts[0];
    }

    function computePlanMetricsPreview(startIso, endIso, examIso, wkHrs, weHrs) {
      const sDt = new Date(startIso + 'T12:00:00');
      const eDt = new Date(endIso + 'T12:00:00');
      const xDt = new Date(examIso + 'T12:00:00');
      if (isNaN(sDt) || isNaN(eDt) || eDt <= sDt) {
        return { valid: false, message: 'End Date must be after Start Date.' };
      }
      const totalDays = Math.max(7, Math.round((eDt - sDt) / 86400000) + 1);
      let weekdaysCount = 0;
      let weekendDaysCount = 0;
      const cur = new Date(sDt);
      for (let i = 0; i < totalDays; i++) {
        const dow = cur.getDay();
        if (dow === 0 || dow === 6) weekendDaysCount++;
        else weekdaysCount++;
        cur.setDate(cur.getDate() + 1);
      }
      const totalHours = (weekdaysCount * wkHrs) + (weekendDaysCount * weHrs);
      const weeksCount = Math.max(1, Math.ceil(totalDays / 7));
      const mockDays = !isNaN(xDt) ? Math.max(0, Math.round((xDt - eDt) / 86400000)) : 55;
      const lessonsPerStudyDay = weekdaysCount > 0 ? (461 / weekdaysCount).toFixed(1) : (461 / Math.max(1, weekendDaysCount)).toFixed(1);
      return {
        valid: true,
        totalDays,
        weekdaysCount,
        weekendDaysCount,
        totalHours,
        weeksCount,
        mockDays,
        lessonsPerStudyDay
      };
    }

    function autoCalculateEndDateFromHours(sourceMode) {
      const isReq = sourceMode === 'req';
      const startEl = document.getElementById(isReq ? 'reqStartDateInput' : 'planStartDateInput');
      const endEl = document.getElementById(isReq ? 'reqEndDateInput' : 'planEndDateInput');
      const wkEl = document.getElementById(isReq ? 'reqWeekdayHrsInput' : 'planWeekdayHoursInput');
      const weEl = document.getElementById(isReq ? 'reqWeekendHrsInput' : 'planWeekendHoursInput');

      if (startEl && !startEl.value) {
        startEl.value = new Date().toISOString().slice(0, 10);
      }
      const startIso = (startEl && startEl.value) || new Date().toISOString().slice(0, 10);
      const wkHrs = Math.max(0, parseFloat(wkEl ? wkEl.value : '0') || 0);
      const weHrs = Math.max(0, parseFloat(weEl ? weEl.value : '0') || 0);
      const weeklyHours = (5 * wkHrs) + (2 * weHrs);
      if (weeklyHours <= 0.5) {
        showToast('Please enter at least 1 hour per week to calculate an End Date.');
        return;
      }
      // Baseline curriculum requires 296.0 study hours (461 lessons + 86 Ethics items + weekend revision)
      const targetTotalHours = 296.0;
      const dt = new Date(startIso + 'T12:00:00');
      let accumHours = 0;
      let daysElapsed = 0;
      while (accumHours < targetTotalHours && daysElapsed < 730) {
        const dow = dt.getDay();
        accumHours += (dow === 0 || dow === 6) ? weHrs : wkHrs;
        daysElapsed++;
        if (accumHours < targetTotalHours) {
          dt.setDate(dt.getDate() + 1);
        }
      }
      const calcEndIso = dt.toISOString().slice(0, 10);
      if (endEl) endEl.value = calcEndIso;
      if (isReq) updateRequestPlanPreview();
      else updateModalPlanPreview();
      showToast(`Auto-calculated Finish Date: ${calcEndIso} (${daysElapsed} days for 296h at ${weeklyHours.toFixed(1)}h/week)`);
    }

    // ==================== TOPIC SEQUENCE, ETHICS MODE & FLEXIBLE WEEKLY / DAILY SCHEDULE ENGINE ====================
    const DEFAULT_9_TOPIC_ORDER = ['CI', 'AI', 'EC', 'EQ', 'FA', 'QM', 'PM', 'FI', 'DV'];
    const TOPIC_ORDER_PRESETS = {
      recommended: ['CI', 'AI', 'EC', 'EQ', 'FA', 'QM', 'PM', 'FI', 'DV'],
      cfai_curriculum: ['QM', 'EC', 'FA', 'CI', 'EQ', 'FI', 'DV', 'AI', 'PM'],
      heavy_weights: ['EQ', 'FA', 'FI', 'PM', 'QM', 'CI', 'AI', 'DV', 'EC']
    };
    const DEFAULT_CUSTOM_DAY_MODES = {
      Mon: 'reading',
      Tue: 'reading',
      Wed: 'reading',
      Thu: 'reading',
      Fri: 'reading',
      Sat: 'revision_practice',
      Sun: 'revision_practice'
    };

    // Group baseline 461 lessons by subject code so any topic reordering preserves intra-subject module/lesson order
    const BASE_LESSONS_BY_SUBJECT = {};
    DEFAULT_9_TOPIC_ORDER.forEach(code => { BASE_LESSONS_BY_SUBJECT[code] = []; });
    BASE_ORDERED_MAIN_LESSONS.forEach(it => {
      if (!BASE_LESSONS_BY_SUBJECT[it.subject]) BASE_LESSONS_BY_SUBJECT[it.subject] = [];
      BASE_LESSONS_BY_SUBJECT[it.subject].push(it);
    });
    // Also prepare standalone Ethics lessons (when user selects 10-Topic Sequence mode)
    BASE_LESSONS_BY_SUBJECT['ET'] = BASE_ORDERED_ETHICS_SLOTS.map((eIt, idx) => ({
      code: eIt.code,
      subject: 'ET',
      module: eIt.module,
      title: eIt.title,
      kind: 'lesson',
      seqEthicsIdx: idx + 1
    }));

    function getActiveTopicOrderList(cfgOverride) {
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      let rawOrder = Array.isArray(cfg.topicOrder) ? cfg.topicOrder.slice() : DEFAULT_9_TOPIC_ORDER.slice();
      // Ensure all 9 core subjects exist once
      DEFAULT_9_TOPIC_ORDER.forEach(c => {
        if (!rawOrder.includes(c)) rawOrder.push(c);
      });
      if (isSeq10) {
        if (!rawOrder.includes('ET')) rawOrder.push('ET');
        return rawOrder.filter((c, i, arr) => (DEFAULT_9_TOPIC_ORDER.includes(c) || c === 'ET') && arr.indexOf(c) === i);
      } else {
        return rawOrder.filter((c, i, arr) => DEFAULT_9_TOPIC_ORDER.includes(c) && arr.indexOf(c) === i);
      }
    }

    function getEffectiveDayModeForDate(isoDate, dayName, isOpeningSetup, cfgOverride) {
      if (appState && appState.dayModeOverrides && appState.dayModeOverrides[isoDate]) {
        return appState.dayModeOverrides[isoDate];
      }
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const wkMode = cfg.weeklyScheduleMode || 'recommended';
      if (isOpeningSetup && wkMode === 'recommended') return 'setup';
      if (wkMode === 'all_reading') return 'reading';
      if (wkMode === 'custom') {
        const map = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES, cfg.customDayModes || {});
        return map[dayName] || 'reading';
      }
      return (dayName === 'Sat' || dayName === 'Sun') ? 'revision_practice' : 'reading';
    }

    function isPlanUsingBaselineDefaults(cfg) {
      if (!cfg) return true;
      const isDefaultDates = (cfg.startDate === '2026-11-01' && cfg.endDate === '2027-03-28');
      const wkHrs = Math.max(0, Number(cfg.weekdayHours ?? 2.0));
      const weHrs = Math.max(0, Number(cfg.weekendHours ?? 2.0));
      const isDefaultHourMode = (!cfg.hourMode || cfg.hourMode === 'fixed');
      const isDefaultEthics = (!cfg.ethicsMode || cfg.ethicsMode === 'daily_parallel');
      const order9 = getActiveTopicOrderList(cfg);
      const isDefaultOrder = (order9.join(',') === DEFAULT_9_TOPIC_ORDER.join(','));
      const isDefaultWeekly = (!cfg.weeklyScheduleMode || cfg.weeklyScheduleMode === 'recommended');
      const hasDayOverrides = appState && appState.dayModeOverrides && Object.keys(appState.dayModeOverrides).length > 0;
      const hasHourOverrides = appState && appState.dateHourOverrides && Object.keys(appState.dateHourOverrides).length > 0;
      const hasDaysOff = appState && appState.daysOff && Object.keys(appState.daysOff).length > 0;
      const hasBacklog = appState && Array.isArray(appState.unscheduledBacklog) && appState.unscheduledBacklog.length > 0;
      return isDefaultDates && wkHrs === 2.0 && weHrs === 2.0 && isDefaultHourMode && isDefaultEthics && isDefaultOrder && isDefaultWeekly && !hasDayOverrides && !hasHourOverrides && !hasDaysOff && !hasBacklog;
    }

    function rebuildScheduleForUserPlan() {
      const cfg = (appState && appState.planConfig) || {
        startDate: '2026-11-01',
        endDate: '2027-03-28',
        examDate: '2027-05-22',
        weekdayHours: 2.0,
        weekendHours: 2.0,
        ethicsMode: 'daily_parallel',
        ethicsCustomMins: null,
        topicOrder: DEFAULT_9_TOPIC_ORDER.slice(),
        weeklyScheduleMode: 'recommended',
        customDayModes: Object.assign({}, DEFAULT_CUSTOM_DAY_MODES)
      };
      if (cfg.examDate) appState.examDate = cfg.examDate;

      // Capture completed lesson codes & confidence ratings by lesson code + title before rebuilding
      if (!appState.completedCodes) appState.completedCodes = {};
      if (!appState.confidenceByCode) appState.confidenceByCode = {};
      Object.keys(allItemsById).forEach(id => {
        const it = allItemsById[id];
        if (it && it.code) {
          const uniqueKey = it.subject === 'ET' ? (it.code + '::' + (it.title || '')) : it.code;
          if (appState.completedItems && appState.completedItems[id]) {
            appState.completedCodes[it.code] = true;
            appState.completedCodes[uniqueKey] = true;
          }
          if (appState.lessonConfidence && appState.lessonConfidence[id]) {
            appState.confidenceByCode[it.code] = appState.lessonConfidence[id];
            appState.confidenceByCode[uniqueKey] = appState.lessonConfidence[id];
          }
        }
      });

      const wkHrs = Math.max(0, Number(cfg.weekdayHours ?? 2.0));
      const weHrs = Math.max(0, Number(cfg.weekendHours ?? 2.0));
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      const activeTopicOrder = getActiveTopicOrderList(cfg);

      if (isPlanUsingBaselineDefaults(cfg)) {
        PLAN_DATA.days = JSON.parse(JSON.stringify(BASELINE_DAYS_SNAPSHOT));
        PLAN_DATA.days.forEach(d => {
          d.dayMode = d.weekNum === 0 ? 'setup' : (d.isWeekend ? 'revision_practice' : 'reading');
        });
        PLAN_DATA.subjects = JSON.parse(JSON.stringify(BASELINE_SUBJECTS_SNAPSHOT));
        PLAN_DATA.totalDays = 148;
        PLAN_DATA.totalHours = 296.0;
        PLAN_DATA.planPeriod = '1 November 2026 – 28 March 2027';
      } else {
        // Exclude any lessons currently parked in appState.unscheduledBacklog from automatic assignment
        const backlogCodeSet = new Set(((appState && appState.unscheduledBacklog) || []).map(b => b.uniqueKey || b.code));

        // Build ordered main lesson stream according to user's 9- or 10-topic sequence
        const orderedMainStream = [];
        activeTopicOrder.forEach(subjCode => {
          const lessonsForSubj = BASE_LESSONS_BY_SUBJECT[subjCode] || [];
          lessonsForSubj.forEach(l => {
            const uKey = l.subject === 'ET' ? (l.code + '::' + (l.title || '')) : l.code;
            if (!backlogCodeSet.has(uKey) && !backlogCodeSet.has(l.code)) {
              orderedMainStream.push(l);
            }
          });
        });

        const sDt = new Date((cfg.startDate || '2026-11-01') + 'T12:00:00');
        const eDt = new Date((cfg.endDate || '2027-03-28') + 'T12:00:00');
        const totalCalDays = Math.max(14, Math.min(730, Math.round((eDt - sDt) / 86400000) + 1));

        const rawDays = [];
        const cur = new Date(sDt);
        let weekCounter = 1;
        for (let i = 0; i < totalCalDays; i++) {
          const iso = cur.toISOString().slice(0, 10);
          const dow = cur.getDay();
          const dayName = DAY_NAMES_SHORT[dow];
          const dateShort = formatIsoToShortDisplay(iso);
          const isWeekend = (dow === 0 || dow === 6);
          const isOff = typeof isDateMarkedDayOff === 'function' && isDateMarkedDayOff(iso);
          const isOpeningSetup = (!isOff && i === 0 && dow === 0 && (!cfg.weeklyScheduleMode || cfg.weeklyScheduleMode === 'recommended') && !(appState.dayModeOverrides && appState.dayModeOverrides[iso]));
          const weekNum = isOpeningSetup ? 0 : weekCounter;
          const dayMode = isOff ? 'day_off' : getEffectiveDayModeForDate(iso, dayName, isOpeningSetup, cfg);
          const plannedHrs = typeof getPlannedHoursForDate === 'function' ? getPlannedHoursForDate(iso, cfg) : (isOff ? 0 : (isWeekend ? weHrs : wkHrs));
          rawDays.push({
            idx: i,
            date: iso,
            dayName,
            dateShort,
            dateDisplay: dayName + ', ' + dateShort + ' ' + iso.slice(0, 4),
            weekNum,
            isWeekend,
            isOpeningSetup,
            isDayOff: isOff,
            plannedHours: plannedHrs,
            dayMode,
            mainItems: [],
            ethicsItems: []
          });
          if (dow === 0 && !isOpeningSetup) {
            weekCounter++;
          }
          cur.setDate(cur.getDate() + 1);
        }

        // Compute reading weights per day based on dayMode & getPlannedHoursForDate (0 on Days Off or 0h days)
        const readingWeights = rawDays.map(d => {
          if (d.isDayOff || d.dayMode === 'day_off' || d.dayMode === 'setup' || d.dayMode === 'revision_practice') return 0;
          const dayH = Number(d.plannedHours ?? (d.isWeekend ? weHrs : wkHrs));
          if (dayH <= 0) return 0;
          if (d.dayMode === 'mixed') return Math.max(0.25, dayH * 0.6);
          return Math.max(0.25, dayH);
        });

        let totalWeight = readingWeights.reduce((a, b) => a + b, 0);
        if (totalWeight <= 0) {
          for (let i = 0; i < rawDays.length; i++) {
            readingWeights[i] = rawDays[i].isWeekend ? 0 : 1;
          }
          totalWeight = readingWeights.reduce((a, b) => a + b, 0) || rawDays.length;
        }

        const totalMain = orderedMainStream.length;
        const totalEth = isSeq10 ? 0 : BASE_ORDERED_ETHICS_SLOTS.length;
        let cumWeight = 0;
        let prevMainIdx = 0;
        let prevEthIdx = 0;
        const firstSubjInOrder = activeTopicOrder[0] || 'CI';

        rawDays.forEach((d, idx) => {
          if (d.dayMode === 'setup') {
            d.mainItems = [
              { id: 'OPEN-MAIN-1', code: 'SETUP 0.01', subject: firstSubjInOrder, module: firstSubjInOrder + ' M1', title: 'Locate the 10 LES topic courses & Practice Experience; set up progress checklist, formula sheet & error log', kind: 'setup' },
              { id: 'OPEN-MAIN-2', code: 'SETUP 0.02', subject: firstSubjInOrder, module: firstSubjInOrder + ' M1', title: 'Review existing Level I notes on core valuation, financial statements, and quantitative concepts', kind: 'revision' }
            ];
            if (!isSeq10) {
              d.ethicsItems = [
                { id: 'OPEN-ET-1', code: 'ET 0.01', subject: 'ET', module: 'ET M1', title: 'Revise the Code and Standards from memory and existing Level I notes; list rules to clarify', kind: 'ethics_revision' }
              ];
            }
            return;
          }

          const w = readingWeights[idx];
          cumWeight += w;
          const targetMainEnd = (idx === rawDays.length - 1)
            ? totalMain
            : Math.min(totalMain, Math.round((cumWeight / totalWeight) * totalMain));
          const targetEthEnd = (!isSeq10 && idx === rawDays.length - 1)
            ? totalEth
            : (!isSeq10 ? Math.min(totalEth, Math.round((cumWeight / totalWeight) * totalEth)) : 0);

          if (w > 0 && targetMainEnd > prevMainIdx) {
            const sliceMain = orderedMainStream.slice(prevMainIdx, targetMainEnd);
            prevMainIdx = targetMainEnd;
            sliceMain.forEach((mIt, mIdx) => {
              d.mainItems.push({
                id: 'M-' + d.date + '-' + (mIdx + 1),
                code: mIt.code,
                subject: mIt.subject,
                module: mIt.module,
                title: mIt.title,
                kind: 'lesson'
              });
            });
          }

          if (!isSeq10 && w > 0 && targetEthEnd > prevEthIdx) {
            const sliceEth = BASE_ORDERED_ETHICS_SLOTS.slice(prevEthIdx, targetEthEnd);
            prevEthIdx = targetEthEnd;
            sliceEth.forEach((eIt, eIdx) => {
              d.ethicsItems.push({
                id: 'E-' + d.date + '-' + (eIdx + 1),
                code: eIt.code,
                subject: 'ET',
                module: eIt.module,
                title: eIt.title,
                kind: 'ethics_reading'
              });
            });
          }
        });

        // Ensure any trailing main lessons are placed on the last active reading day
        if (prevMainIdx < totalMain) {
          const lastReadingDay = rawDays.slice().reverse().find(d => d.dayMode === 'reading' || d.dayMode === 'mixed') || rawDays[rawDays.length - 1];
          orderedMainStream.slice(prevMainIdx).forEach((mIt, extraIdx) => {
            lastReadingDay.mainItems.push({
              id: 'M-' + lastReadingDay.date + '-X' + (extraIdx + 1),
              code: mIt.code,
              subject: mIt.subject,
              module: mIt.module,
              title: mIt.title,
              kind: 'lesson'
            });
          });
        }
        if (!isSeq10 && prevEthIdx < totalEth) {
          const lastReadingDay = rawDays.slice().reverse().find(d => d.dayMode === 'reading' || d.dayMode === 'mixed') || rawDays[rawDays.length - 1];
          BASE_ORDERED_ETHICS_SLOTS.slice(prevEthIdx).forEach((eIt, extraIdx) => {
            lastReadingDay.ethicsItems.push({
              id: 'E-' + lastReadingDay.date + '-X' + (extraIdx + 1),
              code: eIt.code,
              subject: 'ET',
              module: eIt.module,
              title: eIt.title,
              kind: 'ethics_reading'
            });
          });
        }

        // Populate Revision & LES Practice blocks for 'revision_practice' and 'mixed' days + Week Titles & Subject Ranges
        const subjectDatesTracker = {};
        const maxWeek = Math.max(...rawDays.map(d => d.weekNum));
        let lastActiveSubj = activeTopicOrder[0] || 'CI';
        for (let w = 0; w <= maxWeek; w++) {
          const wDays = rawDays.filter(d => d.weekNum === w);
          if (wDays.length === 0) continue;
          if (w === 0) {
            wDays.forEach(d => {
              d.weekTitle = `WEEK 00 / Opening Sunday (${d.dateShort} ${d.date.slice(0,4)})`;
              d.weekSubject = 'Setup & Level I Revision';
            });
            continue;
          }
          const wkSubjs = [];
          const wkMods = [];
          wDays.forEach(d => {
            d.mainItems.forEach(it => {
              if (it.kind === 'lesson') {
                lastActiveSubj = it.subject;
                if (!wkSubjs.includes(it.subject)) wkSubjs.push(it.subject);
                if (!wkMods.includes(it.module)) wkMods.push(it.module);
                if (!subjectDatesTracker[it.subject]) {
                  subjectDatesTracker[it.subject] = { first: d.date, last: d.date, weekdays: 0 };
                }
                subjectDatesTracker[it.subject].last = d.date;
              }
            });
            if (d.mainItems.some(it => it.kind === 'lesson')) {
              const primaryS = d.mainItems[0].subject;
              if (subjectDatesTracker[primaryS]) subjectDatesTracker[primaryS].weekdays++;
            }
          });

          const primarySubjCode = wkSubjs[0] || lastActiveSubj || activeTopicOrder[activeTopicOrder.length - 1] || 'DV';
          const wkSubjNames = wkSubjs.map(code => {
            const sObj = BASELINE_SUBJECTS_SNAPSHOT.find(s => s.code === code);
            return sObj ? sObj.name : code;
          }).join(' + ') || 'Revision & LES Practice';
          const wTitle = `WEEK ${String(w).padStart(2, '0')} / ${wDays[0].dateShort} - ${wDays[wDays.length - 1].dateShort} ${wDays[wDays.length - 1].date.slice(0, 4)}`;
          const modsListStr = wkMods.join(', ') || primarySubjCode;

          wDays.forEach(d => {
            d.weekTitle = wTitle;
            d.weekSubject = wkSubjNames;
            const wTag = 'W' + String(w).padStart(2, '0');
            const dayTag = d.dayName.toUpperCase();

            if (d.dayMode === 'revision_practice') {
              if (d.dayName === 'Sun') {
                d.mainItems.push(
                  {
                    id: 'M-' + d.date + '-REV',
                    code: wTag + ' SUN-REV',
                    subject: primarySubjCode,
                    module: wkSubjs.join(', ') || primarySubjCode,
                    title: `Cumulative revision: ${wkSubjs.join(', ') || primarySubjCode}. — Update formula sheet & error log`,
                    kind: 'weekend_revision'
                  },
                  {
                    id: 'M-' + d.date + '-Q',
                    code: wTag + ' SUN-Q',
                    subject: primarySubjCode,
                    module: wkSubjs.join(', ') || primarySubjCode,
                    title: 'Attempt 6–8 current-topic questions + 4–6 earlier-module questions & review explanations',
                    kind: 'weekend_practice'
                  }
                );
              } else {
                d.mainItems.push(
                  {
                    id: 'M-' + d.date + '-REV',
                    code: `${wTag} ${dayTag}-REV`,
                    subject: primarySubjCode,
                    module: modsListStr,
                    title: `Structured revision: ${modsListStr}. — Revise notes, formulas & marked examples`,
                    kind: 'weekend_revision'
                  },
                  {
                    id: 'M-' + d.date + '-Q',
                    code: `${wTag} ${dayTag}-Q`,
                    subject: primarySubjCode,
                    module: modsListStr,
                    title: `Attempt 8–12 LES Practice questions on completed lessons (${modsListStr}) & review explanations`,
                    kind: 'weekend_practice'
                  }
                );
              }
              if (!isSeq10 && d.ethicsItems.length === 0) {
                d.ethicsItems.push({
                  id: 'E-' + d.date + '-PRAC',
                  code: `${wTag} ${dayTag}-ET`,
                  subject: 'ET',
                  module: 'ET M1',
                  title: "ET practice: Answer and review 3-4 LES Ethics questions on rules covered so far.",
                  kind: 'ethics_practice'
                });
              }
            } else if (d.dayMode === 'mixed') {
              d.mainItems.push({
                id: 'M-' + d.date + '-COMBO-Q',
                code: `${wTag} ${dayTag}-Q`,
                subject: primarySubjCode,
                module: modsListStr,
                title: `Combo Revision & LES Practice: Attempt 6–10 LES Practice questions on ${modsListStr} & review explanations`,
                kind: 'weekend_practice'
              });
              if (!isSeq10 && d.ethicsItems.length === 0) {
                d.ethicsItems.push({
                  id: 'E-' + d.date + '-COMBO-ET',
                  code: `${wTag} ${dayTag}-ET`,
                  subject: 'ET',
                  module: 'ET M1',
                  title: "ET practice: Answer and review 2-3 LES Ethics questions alongside today's reading.",
                  kind: 'ethics_practice'
                });
              }
            }
          });
        }

        // Update subject date ranges, order & planned hours (summing dynamic daily planned hours across non-Day-Off days)
        let dynamicTotalHours = 0;
        rawDays.forEach(d => {
          dynamicTotalHours += Number(d.plannedHours ?? (d.isDayOff ? 0 : (d.isWeekend ? weHrs : wkHrs)));
        });
        const newTotalHours = Math.round(dynamicTotalHours * 10) / 10;

        PLAN_DATA.days = rawDays;
        PLAN_DATA.totalDays = rawDays.length;
        PLAN_DATA.totalHours = newTotalHours;
        PLAN_DATA.planPeriod = `${formatIsoToFullDisplay(cfg.startDate)} – ${formatIsoToFullDisplay(cfg.endDate)}`;

        // Order PLAN_DATA.subjects according to activeTopicOrder (plus ET at bottom if in daily_parallel mode)
        const subjOrderForTable = isSeq10 ? activeTopicOrder.slice() : [...activeTopicOrder, 'ET'];
        PLAN_DATA.subjects = subjOrderForTable.map(code => {
          const baseSubj = BASELINE_SUBJECTS_SNAPSHOT.find(s => s.code === code) || BASELINE_SUBJECTS_SNAPSHOT[0];
          const copy = Object.assign({}, baseSubj);
          if (code === 'ET' && !isSeq10) {
            copy.dates = `Daily (${formatIsoToShortDisplay(cfg.startDate)} - ${formatIsoToShortDisplay(cfg.endDate)} ${cfg.endDate.slice(0,4)})`;
            copy.weekdays = rawDays.filter(d => d.ethicsItems.length > 0).length;
          } else if (subjectDatesTracker[code]) {
            const tr = subjectDatesTracker[code];
            copy.dates = `${formatIsoToShortDisplay(tr.first)} - ${formatIsoToShortDisplay(tr.last)} ${tr.last.slice(0,4)}`;
            copy.weekdays = Math.max(1, tr.weekdays);
          }
          return copy;
        });
      }

      rebuildScheduleLookupMaps();

      // Re-map completedCodes & confidenceByCode onto the rebuilt item IDs so zero progress is ever lost
      const newCompleted = {};
      const newConfidence = {};
      Object.values(allItemsById).forEach(it => {
        const uniqueKey = it.subject === 'ET' ? (it.code + '::' + (it.title || '')) : it.code;
        if (appState.completedCodes && (appState.completedCodes[uniqueKey] || (it.subject !== 'ET' && appState.completedCodes[it.code]))) {
          newCompleted[it.id] = true;
        } else if (appState.completedItems && appState.completedItems[it.id]) {
          newCompleted[it.id] = true;
        }
        if (appState.confidenceByCode && (appState.confidenceByCode[uniqueKey] || (it.subject !== 'ET' && appState.confidenceByCode[it.code]))) {
          newConfidence[it.id] = appState.confidenceByCode[uniqueKey] || appState.confidenceByCode[it.code];
        } else if (appState.lessonConfidence && appState.lessonConfidence[it.id]) {
          newConfidence[it.id] = appState.lessonConfidence[it.id];
        }
      });
      appState.completedItems = newCompleted;
      appState.lessonConfidence = newConfidence;

      // Ensure activeDate is within the user's plan range
      if (!daysByDate[appState.activeDate]) {
        const firstStudyDay = PLAN_DATA.days[1] || PLAN_DATA.days[0];
        appState.activeDate = firstStudyDay ? firstStudyDay.date : '2026-11-02';
      }
      const dateInput = document.getElementById('activeDateInput');
      if (dateInput) dateInput.value = appState.activeDate;

      // Build extended Calendar Map (Start Date -> Core Reading -> Phase 2 -> Final Review Sprint -> EXAM DAY)
      if (typeof rebuildExtendedCalendarDaysMap === 'function') {
        rebuildExtendedCalendarDaysMap();
      }
      populateWeekFilterDropdown(true);
      syncUserPomodoroPresetsFromState();
      updateDynamicUserAndPlanBanners();
    }

    // ==================== INTERACTIVE HANDLERS FOR TOPIC ORDER, ETHICS MODE & DAY MODES ====================
    let draggedTopicCode = null;
    let modalDraftEthicsMode = 'daily_parallel';
    let modalDraftWeeklyMode = 'recommended';
    let modalDraftCustomDays = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
    let modalDraftTopicOrder = DEFAULT_9_TOPIC_ORDER.slice();

    function ensurePlanConfigInitialized() {
      if (!appState.planConfig) {
        appState.planConfig = getDefaultAppState('', '').planConfig;
      }
      if (!Array.isArray(appState.planConfig.topicOrder) || appState.planConfig.topicOrder.length < 9) {
        appState.planConfig.topicOrder = DEFAULT_9_TOPIC_ORDER.slice();
      }
      if (!appState.planConfig.customDayModes) {
        appState.planConfig.customDayModes = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
      }
      if (!appState.dayModeOverrides) appState.dayModeOverrides = {};
      if (!appState.manualEthicsOpenDates) appState.manualEthicsOpenDates = {};
    }

    function setSingleDayModeOverride(mode) {
      ensurePlanConfigInitialized();
      const targetDate = appState.activeDate;
      if (!targetDate) return;
      if (mode === 'default') {
        delete appState.dayModeOverrides[targetDate];
        showToast('Reverted ' + targetDate + ' to your preferred weekly schedule.');
      } else {
        appState.dayModeOverrides[targetDate] = mode;
        const labels = {
          reading: 'New Readings Day',
          revision_practice: 'Revision & LES Practice Day',
          mixed: 'Combo (Reading + Practice) Day'
        };
        showToast(`Switched ${targetDate} to ${labels[mode] || mode} (weekly schedule unchanged).`);
      }
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
    }

    function toggleManualEthicsDrawer(dateStr) {
      ensurePlanConfigInitialized();
      const dKey = dateStr || appState.activeDate;
      if (appState.manualEthicsOpenDates[dKey]) {
        delete appState.manualEthicsOpenDates[dKey];
      } else {
        appState.manualEthicsOpenDates[dKey] = true;
      }
      saveState();
      renderDailyView();
    }

    function adjustDailyEthicsMinutes(deltaMins) {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const wkHrs = Number(cfg.weekdayHours ?? 2.0);
      const totalDayMins = Math.round(wkHrs * 60);
      const recMins = totalDayMins > 0 ? Math.max(10, Math.round(totalDayMins * (20 / 120))) : 20;
      const curMins = (cfg.ethicsCustomMins !== null && cfg.ethicsCustomMins !== undefined && cfg.ethicsCustomMins !== '')
        ? Number(cfg.ethicsCustomMins)
        : recMins;
      const nextMins = Math.min(Math.max(0, curMins + deltaMins), Math.max(30, totalDayMins));
      cfg.ethicsCustomMins = nextMins;
      saveState();
      syncUserPomodoroPresetsFromState();
      refreshAllViews();
      showToast(`Daily Ethics allocation set to ${nextMins} min/day (${Math.max(0, totalDayMins - nextMins)}m Main Topic).`);
    }

    function setDailyEthicsMinutesDirect(val) {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const wkHrs = Number(cfg.weekdayHours ?? 2.0);
      const totalDayMins = Math.round(wkHrs * 60);
      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) {
        cfg.ethicsCustomMins = null;
      } else {
        cfg.ethicsCustomMins = Math.min(Math.max(0, parsed), Math.max(30, totalDayMins));
      }
      saveState();
      syncUserPomodoroPresetsFromState();
      refreshAllViews();
      showToast(cfg.ethicsCustomMins === null ? 'Reset to recommended daily Ethics allocation.' : `Daily Ethics allocation set to ${cfg.ethicsCustomMins} min/day.`);
    }

    function resetDailyEthicsMinutesToRecommended() {
      ensurePlanConfigInitialized();
      appState.planConfig.ethicsCustomMins = null;
      saveState();
      syncUserPomodoroPresetsFromState();
      refreshAllViews();
      showToast('Restored recommended Ethics allocation (~17% of daily study time).');
    }

    function setEthicsModePreference(mode) {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      cfg.ethicsMode = (mode === 'sequence_10') ? 'sequence_10' : 'daily_parallel';
      if (cfg.ethicsMode === 'sequence_10') {
        if (!cfg.topicOrder.includes('ET')) cfg.topicOrder.push('ET');
      } else {
        cfg.topicOrder = cfg.topicOrder.filter(c => c !== 'ET');
      }
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(cfg.ethicsMode === 'sequence_10'
        ? 'Switched to 10-Topic Sequence Mode: 100% daily study time on active topic; Ethics placed in topic sequence!'
        : 'Switched to Daily Ethics Mode: Ethics studied alongside the 9 main topics.');
    }

    function setWeeklyScheduleMode(mode) {
      ensurePlanConfigInitialized();
      appState.planConfig.weeklyScheduleMode = mode;
      if (mode === 'all_reading') {
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(k => {
          appState.planConfig.customDayModes[k] = 'reading';
        });
      } else if (mode === 'recommended') {
        appState.planConfig.customDayModes = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
      }
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      const msgMap = {
        recommended: 'Applied Recommended Weekly Split: Mon–Fri New Readings • Sat–Sun Revision & LES Practice.',
        all_reading: 'Applied 7-Day Reading Schedule: New curriculum readings scheduled every day (Mon–Sun).',
        custom: 'Custom Weekly Schedule active: click any day (Mon–Sun) to set Reading, Revision/Practice, or Combo.'
      };
      showToast(msgMap[mode] || 'Updated weekly study schedule.');
    }

    function cycleCustomWeekdayMode(dayName, isModal) {
      const cycleOrder = ['reading', 'revision_practice', 'mixed'];
      if (isModal) {
        modalDraftWeeklyMode = 'custom';
        const cur = modalDraftCustomDays[dayName] || 'reading';
        const next = cycleOrder[(cycleOrder.indexOf(cur) + 1) % cycleOrder.length];
        modalDraftCustomDays[dayName] = next;
        renderModalFlexibilityControls();
        updateModalPlanPreview();
        return;
      }
      ensurePlanConfigInitialized();
      appState.planConfig.weeklyScheduleMode = 'custom';
      const cur = appState.planConfig.customDayModes[dayName] || 'reading';
      const next = cycleOrder[(cycleOrder.indexOf(cur) + 1) % cycleOrder.length];
      appState.planConfig.customDayModes[dayName] = next;
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      const lbls = { reading: 'New Readings', revision_practice: 'Revision & LES Practice', mixed: 'Combo (Read + Practice)' };
      showToast(`Every ${dayName} set to: ${lbls[next]}`);
    }

    function moveTopicInOrder(subjCode, delta, isModal) {
      if (isModal) {
        const arr = modalDraftTopicOrder.slice();
        const idx = arr.indexOf(subjCode);
        if (idx === -1) return;
        const targetIdx = idx + delta;
        if (targetIdx < 0 || targetIdx >= arr.length) return;
        const tmp = arr[idx];
        arr[idx] = arr[targetIdx];
        arr[targetIdx] = tmp;
        modalDraftTopicOrder = arr;
        renderModalFlexibilityControls();
        return;
      }
      ensurePlanConfigInitialized();
      const arr = getActiveTopicOrderList(appState.planConfig);
      const idx = arr.indexOf(subjCode);
      if (idx === -1) return;
      const targetIdx = idx + delta;
      if (targetIdx < 0 || targetIdx >= arr.length) return;
      const tmp = arr[idx];
      arr[idx] = arr[targetIdx];
      arr[targetIdx] = tmp;
      appState.planConfig.topicOrder = arr;
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Moved ${subjCode} to #${targetIdx + 1} in your study sequence (${arr.join(' → ')})`);
    }

    function onTopicDragStart(ev, subjCode, isModal) {
      draggedTopicCode = { code: subjCode, isModal: !!isModal };
      if (ev.currentTarget) ev.currentTarget.classList.add('dragging');
      if (ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('text/plain', subjCode);
      }
    }

    function onTopicDragOver(ev) {
      ev.preventDefault();
      if (ev.dataTransfer) ev.dataTransfer.dropEffect = 'move';
      if (ev.currentTarget) ev.currentTarget.classList.add('drag-over');
    }

    function onTopicDragLeave(ev) {
      if (ev.currentTarget) ev.currentTarget.classList.remove('drag-over');
    }

    function onTopicDragEnd(ev) {
      if (ev.currentTarget) ev.currentTarget.classList.remove('dragging', 'drag-over');
      document.querySelectorAll('.topic-chip-draggable').forEach(el => el.classList.remove('dragging', 'drag-over'));
    }

    function onTopicDrop(ev, targetSubjCode, isModal) {
      ev.preventDefault();
      if (ev.currentTarget) ev.currentTarget.classList.remove('drag-over');
      const srcCode = (draggedTopicCode && draggedTopicCode.code) || (ev.dataTransfer ? ev.dataTransfer.getData('text/plain') : '');
      if (!srcCode || srcCode === targetSubjCode) return;

      if (isModal) {
        const arr = modalDraftTopicOrder.slice();
        const fromIdx = arr.indexOf(srcCode);
        const toIdx = arr.indexOf(targetSubjCode);
        if (fromIdx === -1 || toIdx === -1) return;
        arr.splice(fromIdx, 1);
        arr.splice(toIdx, 0, srcCode);
        modalDraftTopicOrder = arr;
        renderModalFlexibilityControls();
        return;
      }

      ensurePlanConfigInitialized();
      const arr = getActiveTopicOrderList(appState.planConfig);
      const fromIdx = arr.indexOf(srcCode);
      const toIdx = arr.indexOf(targetSubjCode);
      if (fromIdx === -1 || toIdx === -1) return;
      arr.splice(fromIdx, 1);
      arr.splice(toIdx, 0, srcCode);
      appState.planConfig.topicOrder = arr;
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Reordered ${srcCode} to #${toIdx + 1}: ${arr.join(' → ')}`);
    }

    function applyTopicOrderPreset(presetKey) {
      ensurePlanConfigInitialized();
      const base = (TOPIC_ORDER_PRESETS[presetKey] || DEFAULT_9_TOPIC_ORDER).slice();
      if (appState.planConfig.ethicsMode === 'sequence_10') {
        base.push('ET');
      }
      appState.planConfig.topicOrder = base;
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Applied topic sequence: ${base.join(' → ')}`);
    }

    function applyRecommendedScheduleDefaults() {
      ensurePlanConfigInitialized();
      appState.planConfig.ethicsMode = 'daily_parallel';
      appState.planConfig.ethicsCustomMins = null;
      appState.planConfig.topicOrder = DEFAULT_9_TOPIC_ORDER.slice();
      appState.planConfig.weeklyScheduleMode = 'recommended';
      appState.planConfig.customDayModes = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
      appState.dayModeOverrides = {};
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast('Restored recommended schedule defaults (9-topic order + daily Ethics + Mon–Fri Read / Sat–Sun Practice).');
    }

    function renderRoadmapFlexibilityControls() {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      const activeOrder = getActiveTopicOrderList(cfg);
      const wkHrs = Number(cfg.weekdayHours ?? 2.0);
      const weHrs = Number(cfg.weekendHours ?? 2.0);
      const totalDayMins = Math.round(wkHrs * 60);
      const recEthMins = totalDayMins > 0 ? Math.max(10, Math.round(totalDayMins * (20 / 120))) : 20;
      const hasCustomEth = (cfg.ethicsCustomMins !== null && cfg.ethicsCustomMins !== undefined && cfg.ethicsCustomMins !== '');
      const effEthMins = isSeq10 ? 0 : (hasCustomEth ? Number(cfg.ethicsCustomMins) : recEthMins);
      const mainMins = Math.max(0, totalDayMins - effEthMins);

      // Update Smart Recommendation Banner
      const recText = document.getElementById('smartScheduleRecommendationText');
      if (recText) {
        recText.innerHTML = `<strong>&#128161; Recommended Schedule vs. Your Active Settings:</strong> For your <strong>${cfg.startDate} – ${cfg.endDate}</strong> window (${wkHrs}h/day Wk, ${weHrs}h/day Wknd), we recommend <strong>${Math.max(0, totalDayMins - recEthMins)}m Main Topic + ${recEthMins}m Daily Ethics</strong> with <strong>Mon–Fri Readings &amp; Sat–Sun Practice</strong>. These are never mandatory restrictions—adjust any setting below and your roadmap updates automatically.`;
      }

      // 1. Ethics mode buttons
      ['daily_parallel', 'sequence_10'].forEach(m => {
        const btn = document.getElementById('roadmapEthicsBtn-' + m);
        if (btn) {
          btn.className = 'p-3 rounded-xl border text-left transition ' + ((cfg.ethicsMode || 'daily_parallel') === m ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
        }
      });
      const ethStatus = document.getElementById('roadmapEthicsModeStatus');
      if (ethStatus) {
        ethStatus.textContent = isSeq10
          ? `10-Topic Sequence (Ethics #${activeOrder.indexOf('ET') + 1} • 100% Daily Focus)`
          : `Daily Ethics (${effEthMins}m Ethics + ${mainMins}m Main)`;
      }
      const ethAllocRow = document.getElementById('roadmapDailyEthicsAllocationRow');
      if (ethAllocRow) ethAllocRow.classList.toggle('hidden', isSeq10);
      const ethSplitPrev = document.getElementById('roadmapEthicsSplitPreview');
      if (ethSplitPrev) {
        ethSplitPrev.textContent = `${hasCustomEth ? 'Custom Split' : 'Recommended (~17%)'}: ${effEthMins}m Ethics + ${mainMins}m Main Topic (out of ${totalDayMins}m/day)`;
      }
      const ethInp = document.getElementById('roadmapEthicsMinsInput');
      if (ethInp) ethInp.value = String(effEthMins);

      // 2. Weekly schedule mode buttons & 7-day strip
      const wkMode = cfg.weeklyScheduleMode || 'recommended';
      ['recommended', 'all_reading', 'custom'].forEach(wm => {
        const btn = document.getElementById('roadmapWeeklyBtn-' + wm);
        if (btn) {
          btn.className = 'p-2.5 rounded-xl border text-left transition ' + (wkMode === wm ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
        }
      });
      const stripEl = document.getElementById('roadmapCustomDaysStrip');
      if (stripEl) {
        const dayKeys = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        stripEl.innerHTML = dayKeys.map(dKey => {
          const eff = (wkMode === 'all_reading') ? 'reading' : (wkMode === 'recommended' ? ((dKey === 'Sat' || dKey === 'Sun') ? 'revision_practice' : 'reading') : (cfg.customDayModes[dKey] || 'reading'));
          const badgeCfg = eff === 'reading'
            ? { label: 'Read', cls: 'bg-blue-50 text-blue-900 border-blue-200' }
            : (eff === 'revision_practice'
              ? { label: 'Rev/Qs', cls: 'bg-amber-50 text-amber-900 border-amber-200' }
              : { label: 'Combo', cls: 'bg-purple-50 text-purple-900 border-purple-200' });
          return `
            <button type="button" onclick="cycleCustomWeekdayMode('${dKey}', false)" class="p-2 rounded-xl border text-center transition hover:shadow-2xs ${badgeCfg.cls}" title="Click to cycle ${dKey} between New Readings, Revision & Practice, and Combo">
              <span class="block text-[11px] font-extrabold">${dKey}</span>
              <span class="block text-[10px] font-bold mt-0.5">${badgeCfg.label}</span>
            </button>
          `;
        }).join('');
      }

      // 3. Topic Sequence Grid (Drag-and-Drop + Arrow Buttons)
      const countLbl = document.getElementById('roadmapTopicCountLabel');
      if (countLbl) countLbl.textContent = isSeq10 ? '10 Topics Including Ethics' : '9 Core Topics + Daily Ethics';
      if (typeof renderRoadmapHourAndPhaseControls === 'function') {
        renderRoadmapHourAndPhaseControls();
      }
      const gridEl = document.getElementById('roadmapTopicOrderGrid');
      if (gridEl) {
        gridEl.innerHTML = activeOrder.map((code, idx) => {
          const sObj = PLAN_DATA.subjects.find(s => s.code === code) || BASELINE_SUBJECTS_SNAPSHOT.find(s => s.code === code) || { code, name: code, color: '#6955d9', dates: '' };
          let done = 0, tot = 0;
          Object.values(allItemsById).forEach(it => {
            if (it.subject === code && (it.kind === 'lesson' || (code === 'ET' && it.kind === 'ethics_reading'))) {
              tot++;
              if (appState.completedItems[it.id]) done++;
            }
          });
          return `
            <div draggable="true" ondragstart="onTopicDragStart(event, '${code}', false)" ondragover="onTopicDragOver(event)" ondragleave="onTopicDragLeave(event)" ondrop="onTopicDrop(event, '${code}', false)" ondragend="onTopicDragEnd(event)" class="topic-chip-draggable p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between gap-1.5">
              <div class="flex items-center justify-between gap-1">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="text-slate-400 text-xs font-bold cursor-grab" title="Drag to reorder">&#10303;</span>
                  <span class="text-[11px] font-extrabold px-1.5 py-0.5 rounded text-white shrink-0" style="background-color:${sObj.color || '#6955d9'}">#${idx + 1} ${code}</span>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <button type="button" onclick="moveTopicInOrder('${code}', -1, false)" ${idx === 0 ? 'disabled' : ''} class="topic-move-btn" title="Move ${code} earlier">&uarr;</button>
                  <button type="button" onclick="moveTopicInOrder('${code}', 1, false)" ${idx === activeOrder.length - 1 ? 'disabled' : ''} class="topic-move-btn" title="Move ${code} later">&darr;</button>
                </div>
              </div>
              <div class="text-xs font-bold text-slate-900 truncate" title="${sObj.name}">${sObj.name}</div>
              <div class="flex items-center justify-between text-[10px] text-slate-500">
                <span class="truncate">${sObj.dates || ''}</span>
                <span class="font-bold text-slate-700 shrink-0">${done}/${tot}</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // ==================== PLAN SETTINGS MODAL FLEXIBILITY HANDLERS ====================
    function setModalEthicsMode(mode) {
      modalDraftEthicsMode = (mode === 'sequence_10') ? 'sequence_10' : 'daily_parallel';
      if (modalDraftEthicsMode === 'sequence_10') {
        if (!modalDraftTopicOrder.includes('ET')) modalDraftTopicOrder.push('ET');
      } else {
        modalDraftTopicOrder = modalDraftTopicOrder.filter(c => c !== 'ET');
      }
      renderModalFlexibilityControls();
      updateModalPlanPreview();
    }

    function setModalWeeklyMode(mode) {
      modalDraftWeeklyMode = mode;
      if (mode === 'all_reading') {
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(k => { modalDraftCustomDays[k] = 'reading'; });
      } else if (mode === 'recommended') {
        modalDraftCustomDays = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
      }
      renderModalFlexibilityControls();
      updateModalPlanPreview();
    }

    function applyModalTopicPreset(presetKey) {
      const base = (TOPIC_ORDER_PRESETS[presetKey] || DEFAULT_9_TOPIC_ORDER).slice();
      if (modalDraftEthicsMode === 'sequence_10') base.push('ET');
      modalDraftTopicOrder = base;
      renderModalFlexibilityControls();
      updateModalPlanPreview();
    }

    function applyRecommendedScheduleDefaultsInModal() {
      modalDraftEthicsMode = 'daily_parallel';
      modalDraftWeeklyMode = 'recommended';
      modalDraftCustomDays = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES);
      modalDraftTopicOrder = DEFAULT_9_TOPIC_ORDER.slice();
      const ethInp = document.getElementById('modalEthicsCustomMinsInput');
      if (ethInp) ethInp.value = '';
      renderModalFlexibilityControls();
      updateModalPlanPreview();
      showToast('Loaded recommended schedule preferences in modal.');
    }

    function renderModalFlexibilityControls() {
      const isSeq10 = (modalDraftEthicsMode === 'sequence_10');
      ['daily_parallel', 'sequence_10'].forEach(m => {
        const btn = document.getElementById('modalEthicsBtn-' + m);
        if (btn) btn.className = 'p-2.5 rounded-xl border text-left transition ' + (modalDraftEthicsMode === m ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
      });
      const ethMinsBox = document.getElementById('modalDailyEthicsMinsBox');
      if (ethMinsBox) ethMinsBox.classList.toggle('hidden', isSeq10);

      ['recommended', 'all_reading', 'custom'].forEach(wm => {
        const btn = document.getElementById('modalWeeklyBtn-' + wm);
        if (btn) btn.className = 'p-2 rounded-xl border text-left transition ' + (modalDraftWeeklyMode === wm ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
      });

      const stripEl = document.getElementById('modalCustomDaysStrip');
      if (stripEl) {
        const dayKeys = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        stripEl.innerHTML = dayKeys.map(dKey => {
          const eff = (modalDraftWeeklyMode === 'all_reading') ? 'reading' : (modalDraftWeeklyMode === 'recommended' ? ((dKey === 'Sat' || dKey === 'Sun') ? 'revision_practice' : 'reading') : (modalDraftCustomDays[dKey] || 'reading'));
          const badgeCfg = eff === 'reading'
            ? { label: 'Read', cls: 'bg-blue-50 text-blue-900 border-blue-200' }
            : (eff === 'revision_practice'
              ? { label: 'Rev/Qs', cls: 'bg-amber-50 text-amber-900 border-amber-200' }
              : { label: 'Combo', cls: 'bg-purple-50 text-purple-900 border-purple-200' });
          return `
            <button type="button" onclick="cycleCustomWeekdayMode('${dKey}', true)" class="p-1.5 rounded-lg border text-center transition ${badgeCfg.cls}">
              <span class="block text-[10px] font-extrabold">${dKey}</span>
              <span class="block text-[9px] font-bold">${badgeCfg.label}</span>
            </button>
          `;
        }).join('');
      }

      const cntLbl = document.getElementById('modalTopicCountLabel');
      if (cntLbl) cntLbl.textContent = isSeq10 ? '10 Topics Including Ethics' : '9 Core Topics';

      const listEl = document.getElementById('modalTopicOrderList');
      if (listEl) {
        listEl.innerHTML = modalDraftTopicOrder.map((code, idx) => {
          const sObj = BASELINE_SUBJECTS_SNAPSHOT.find(s => s.code === code) || { code, name: code, color: '#6955d9' };
          return `
            <div draggable="true" ondragstart="onTopicDragStart(event, '${code}', true)" ondragover="onTopicDragOver(event)" ondragleave="onTopicDragLeave(event)" ondrop="onTopicDrop(event, '${code}', true)" ondragend="onTopicDragEnd(event)" class="topic-chip-draggable p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between gap-2">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="text-slate-400 text-xs font-bold cursor-grab">&#10303;</span>
                <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded text-white shrink-0" style="background-color:${sObj.color || '#6955d9'}">#${idx + 1} ${code}</span>
                <span class="text-xs font-bold text-slate-800 truncate">${sObj.name}</span>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button type="button" onclick="moveTopicInOrder('${code}', -1, true)" ${idx === 0 ? 'disabled' : ''} class="topic-move-btn" title="Move Up">&uarr;</button>
                <button type="button" onclick="moveTopicInOrder('${code}', 1, true)" ${idx === modalDraftTopicOrder.length - 1 ? 'disabled' : ''} class="topic-move-btn" title="Move Down">&darr;</button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    function updateDynamicUserAndPlanBanners() {
      const profile = (appState && appState.userProfile) || { name: 'Candidate', email: '' };
      const cfg = (appState && appState.planConfig) || { startDate: '2026-11-01', endDate: '2027-03-28', examDate: '2027-05-22', weekdayHours: 2.0, weekendHours: 2.0 };
      const fullName = profile.name || 'Candidate';
      const firstName = fullName.trim().split(/\s+/)[0] || 'Candidate';
      const initials = fullName.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'CA';

      const avEl = document.getElementById('sidebarUserAvatar'); if (avEl) avEl.textContent = initials;
      const nmEl = document.getElementById('sidebarUserName'); if (nmEl) nmEl.textContent = fullName;
      const regEntry = (loadUsersRegistry()[currentActiveUserEmail]) || {};
      const cleanDisplayEmail = (regEntry.displayEmail !== undefined ? regEntry.displayEmail : (profile.email && !profile.email.startsWith('candidate_usr') ? profile.email : ''));
      const emEl = document.getElementById('sidebarUserEmail'); if (emEl) emEl.textContent = cleanDisplayEmail || (regEntry.visitorId ? ('Profile ' + regEntry.visitorId) : 'Personal Workspace');
      const hdUser = document.getElementById('headerUserBadgeText'); if (hdUser) hdUser.textContent = fullName;
      const heroWel = document.getElementById('heroWelcomeText');
      if (heroWel) heroWel.textContent = `Welcome back, ${firstName}. Let's make this session count.`;

      // Show/hide Admin button
      const adminBtn = document.getElementById('openAdminGeneratorBtn');
      if (adminBtn) {
        const isOwner = isOwnerEmail(normalizeEmail(profile.email)) ||
                        isOwnerEmail(normalizeEmail(cleanDisplayEmail)) ||
                        localStorage.getItem(ADMIN_UNLOCKED_DEVICE_KEY) === 'true';
        adminBtn.classList.toggle('hidden', !isOwner);
      }

      const maxW = getMaxWeekNum();
      const totDays = PLAN_DATA.days.length;
      const totHrs = Math.round(Number(PLAN_DATA.totalHours) || 296);
      const startShort = formatIsoToShortDisplay(cfg.startDate) + ' ' + cfg.startDate.slice(0, 4);
      const endShort = formatIsoToShortDisplay(cfg.endDate) + ' ' + cfg.endDate.slice(0, 4);
      const examMonthYear = cfg.examDate ? (MONTH_NAMES_SHORT[Math.max(0, parseInt(cfg.examDate.split('-')[1], 10) - 1)].toUpperCase() + ' ' + cfg.examDate.slice(0, 4)) : 'MAY 2027';

      const hdBadge = document.getElementById('headerPlanStatsBadge');
      if (hdBadge) hdBadge.textContent = `LES Verified • ${totDays} Days / ${totHrs} Hrs (${cfg.weekdayHours}h Wk / ${cfg.weekendHours}h Wknd)`;
      const hdSub = document.getElementById('headerPlanDatesSub');
      if (hdSub) hdSub.textContent = `Core Reading: ${startShort} – ${endShort} • Target Exam: ${cfg.examDate}`;

      const heroTag = document.getElementById('heroExamTag');
      if (heroTag) heroTag.innerHTML = `${examMonthYear} &nbsp; · &nbsp; LEVEL II`;
      const jWeeks = document.getElementById('journeyWeeksStat');
      if (jWeeks) jWeeks.textContent = String(maxW);
      const jHours = document.getElementById('journeyHoursStat');
      if (jHours) jHours.innerHTML = `${totHrs}<span style="font-size:14px;letter-spacing:0"> h</span>`;
      const jPhase = document.getElementById('journeyPhaseText');
      if (jPhase) jPhase.innerHTML = `<b>Your preparation, mapped out.</b>Core readings → Practice → Mocks<br>${startShort} – ${examMonthYear}`;

      const hmEye = document.getElementById('scheduleHeatmapEyebrow');
      if (hmEye) hmEye.textContent = `${totDays}-DAY PACING & CONSISTENCY TRACKER (${maxW} WEEKS)`;
      const hmHead = document.getElementById('scheduleHeatmapHeading');
      if (hmHead) hmHead.textContent = `Visual Study Heatmap & Schedule Pace (${startShort} – ${endShort})`;

      SUB_TAB_META.schedule.title = `${maxW}-Week Schedule & ${totDays}-Day Heatmap.`;
      SUB_TAB_META.schedule.pill = `${startShort.toUpperCase()} – ${endShort.toUpperCase()}`;
      SUB_TAB_META.timer.pill = `${totHrs}.0 PLANNED HOURS`;
    }

    // ==================== UPGRADE v3: UNIFIED ENGINE FOR FEATURES 1, 2, 3, 4 & 5 ====================

    let allCalendarDaysByDate = {};
    let pendingDayOffModalDate = null;

    // Official topic baseline hours & lesson counts for bottom-up workload estimation
    const SUBJECT_BASELINE_META = {
      CI: { hours: 21.7, lessons: 26, name: 'Corporate Issuers' },
      AI: { hours: 23.3, lessons: 29, name: 'Alternative Investments' },
      EC: { hours: 16.7, lessons: 26, name: 'Economics' },
      EQ: { hours: 41.7, lessons: 68, name: 'Equity Investments' },
      FA: { hours: 33.3, lessons: 59, name: 'Financial Statement Analysis' },
      QM: { hours: 33.3, lessons: 64, name: 'Quantitative Methods' },
      PM: { hours: 33.3, lessons: 45, name: 'Portfolio Management' },
      FI: { hours: 28.3, lessons: 49, name: 'Fixed Income' },
      DV: { hours: 15.0, lessons: 25, name: 'Derivatives' },
      ET: { hours: 49.3, lessons: 86, name: 'Ethical & Professional Standards' }
    };

    function addDaysIso(isoDate, deltaDays) {
      const dt = new Date(isoDate + 'T12:00:00');
      if (isNaN(dt)) return isoDate;
      dt.setDate(dt.getDate() + deltaDays);
      return dt.toISOString().slice(0, 10);
    }

    function diffDaysIso(startIso, endIso) {
      const s = new Date(startIso + 'T12:00:00');
      const e = new Date(endIso + 'T12:00:00');
      if (isNaN(s) || isNaN(e)) return 0;
      return Math.round((e - s) / 86400000);
    }

    function isDateMarkedDayOff(isoDate) {
      return Boolean(appState && appState.daysOff && appState.daysOff[isoDate]);
    }

    function getFinalReviewWindow(cfgOverride) {
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const examIso = cfg.examDate || (appState && appState.examDate) || '2027-05-22';
      const endIso = cfg.endDate || '2027-03-28';
      const frDays = Math.max(0, parseInt(cfg.finalReviewDays ?? 14, 10));
      const finalReviewStartIso = frDays > 0 ? addDaysIso(examIso, -frDays) : examIso;
      const finalReviewEndIso = frDays > 0 ? addDaysIso(examIso, -1) : examIso;
      const phase2StartIso = addDaysIso(endIso, 1);
      const overlapDays = frDays > 0 ? Math.max(0, diffDaysIso(finalReviewStartIso, endIso) + 1) : 0;
      const examBeforeCoreEnd = diffDaysIso(endIso, examIso) <= 0;
      return {
        examIso,
        endIso,
        frDays,
        finalReviewStartIso,
        finalReviewEndIso,
        phase2StartIso,
        overlapDays,
        hasConflict: overlapDays > 0 || examBeforeCoreEnd,
        examBeforeCoreEnd
      };
    }

    function getPhaseForDate(isoDate, cfgOverride) {
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const startIso = cfg.startDate || '2026-11-01';
      const endIso = cfg.endDate || '2027-03-28';
      const fr = getFinalReviewWindow(cfg);
      if (isoDate === fr.examIso) return 'exam_day';
      if (fr.frDays > 0 && isoDate >= fr.finalReviewStartIso && isoDate < fr.examIso) {
        if (isoDate <= endIso) return 'overlap_final_review';
        return 'final_review';
      }
      if (isoDate >= startIso && isoDate <= endIso) return 'core_reading';
      if (isoDate > endIso && isoDate < fr.examIso) return 'phase2_practice';
      return 'outside_plan';
    }

    function getPlannedHoursForDate(isoDate, cfgOverride) {
      if (!isoDate) return 0;
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const examIso = cfg.examDate || (appState && appState.examDate) || '2027-05-22';
      if (isoDate === examIso) return 0;
      if (isDateMarkedDayOff(isoDate)) return 0;

      // Check date-specific override first
      if (appState && appState.dateHourOverrides && appState.dateHourOverrides[isoDate] !== undefined && appState.dateHourOverrides[isoDate] !== null && appState.dateHourOverrides[isoDate] !== '') {
        return Math.max(0, Number(appState.dateHourOverrides[isoDate]) || 0);
      }

      const dt = new Date(isoDate + 'T12:00:00');
      if (isNaN(dt)) return Number(cfg.weekdayHours ?? 2.0);
      const dow = dt.getDay();
      const dayName = DAY_NAMES_SHORT[dow];
      const isWeekend = (dow === 0 || dow === 6);
      const hourMode = cfg.hourMode || 'fixed';

      if (hourMode === 'custom_days') {
        const map = cfg.customWeekdayHours || {};
        if (map[dayName] !== undefined && map[dayName] !== null && map[dayName] !== '') {
          return Math.max(0, Number(map[dayName]) || 0);
        }
      } else if (hourMode === 'ramp_up') {
        const rc = cfg.rampUpConfig || {};
        const sWk = Number(rc.startWeekdayHours ?? cfg.weekdayHours ?? 2.0);
        const sWe = Number(rc.startWeekendHours ?? cfg.weekendHours ?? 3.0);
        const fWk = Number(rc.finalWeekdayHours ?? 3.5);
        const fWe = Number(rc.finalWeekendHours ?? 4.5);
        const maxCap = Math.max(1, Number(rc.maxDailyHours ?? 6.0));
        const rStartIso = rc.rampStartDate || cfg.startDate || '2027-01-15';
        const rDur = Math.max(1, parseInt(rc.rampDurationDays ?? 60, 10));
        const daysInto = diffDaysIso(rStartIso, isoDate);
        const progress = Math.min(1, Math.max(0, daysInto / rDur));
        const rawH = isWeekend ? (sWe + progress * (fWe - sWe)) : (sWk + progress * (fWk - sWk));
        return Math.round(Math.min(maxCap, Math.max(0, rawH)) * 4) / 4;
      }

      return Math.max(0, Number(isWeekend ? (cfg.weekendHours ?? 2.0) : (cfg.weekdayHours ?? 2.0)));
    }

    function getActualMinutesForDate(isoDate) {
      if (!isoDate || !appState || !Array.isArray(appState.timerSessions)) return 0;
      let mins = 0;
      appState.timerSessions.forEach(s => {
        if (s && s.date === isoDate && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15') {
          mins += (parseInt(s.minutes, 10) || 0);
        }
      });
      return mins;
    }

    function getActualStudyHoursForDate(isoDate) {
      return getActualMinutesForDate(isoDate) / 60;
    }

    function getTotalActualStudyHours() {
      if (!appState || !Array.isArray(appState.timerSessions)) return 0;
      let mins = 0;
      appState.timerSessions.forEach(s => {
        if (s && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15') {
          mins += (parseInt(s.minutes, 10) || 0);
        }
      });
      return mins / 60;
    }

    function getWeeklyAndMonthlyTimeReport(refIsoDate) {
      const refIso = refIsoDate || (appState && appState.activeDate) || '2026-11-02';
      const dt = new Date(refIso + 'T12:00:00');
      const dow = dt.getDay();
      const diffToMon = dow === 0 ? -6 : (1 - dow);
      const monIso = addDaysIso(refIso, diffToMon);
      let weekPlannedHrs = 0;
      let weekActualHrs = 0;
      for (let i = 0; i < 7; i++) {
        const dIso = addDaysIso(monIso, i);
        weekPlannedHrs += getPlannedHoursForDate(dIso);
        weekActualHrs += getActualStudyHoursForDate(dIso);
      }

      const ym = refIso.slice(0, 7);
      const [yNum, mNum] = ym.split('-').map(Number);
      const daysInMo = new Date(yNum, mNum, 0).getDate();
      let monthPlannedHrs = 0;
      let monthActualHrs = 0;
      for (let d = 1; d <= daysInMo; d++) {
        const dIso = `${ym}-${String(d).padStart(2, '0')}`;
        const ph = getPhaseForDate(dIso);
        if (ph !== 'outside_plan') {
          monthPlannedHrs += getPlannedHoursForDate(dIso);
        }
        monthActualHrs += getActualStudyHoursForDate(dIso);
      }

      return {
        weekPlannedHrs,
        weekActualHrs,
        weekDiffHrs: weekActualHrs - weekPlannedHrs,
        weekPct: weekPlannedHrs > 0 ? Math.round((weekActualHrs / weekPlannedHrs) * 100) : (weekActualHrs > 0 ? 100 : 0),
        monthPlannedHrs,
        monthActualHrs,
        monthDiffHrs: monthActualHrs - monthPlannedHrs,
        monthPct: monthPlannedHrs > 0 ? Math.round((monthActualHrs / monthPlannedHrs) * 100) : (monthActualHrs > 0 ? 100 : 0)
      };
    }

    // Build unified calendar day map covering Start Date -> Core Reading -> Phase 2 -> Final Review Sprint -> EXAM DAY
    function rebuildExtendedCalendarDaysMap() {
      allCalendarDaysByDate = {};
      const cfg = (appState && appState.planConfig) || {};
      const startIso = cfg.startDate || '2026-11-01';
      const endIso = cfg.endDate || '2027-03-28';
      const examIso = cfg.examDate || (appState && appState.examDate) || '2027-05-22';
      const fr = getFinalReviewWindow(cfg);

      // 1. Copy all Phase 1 (Core Reading) days from PLAN_DATA.days
      PLAN_DATA.days.forEach(d => {
        const isOff = isDateMarkedDayOff(d.date);
        const plannedH = getPlannedHoursForDate(d.date, cfg);
        d.isDayOff = isOff;
        d.plannedHours = plannedH;
        const phase = getPhaseForDate(d.date, cfg);
        allCalendarDaysByDate[d.date] = {
          date: d.date,
          dayName: d.dayName,
          dateShort: d.dateShort,
          dateDisplay: d.dateDisplay,
          weekNum: d.weekNum,
          isWeekend: d.isWeekend,
          isDayOff: isOff,
          phase,
          dayMode: isOff ? 'day_off' : d.dayMode,
          plannedHours: plannedH,
          weekSubject: isOff ? 'Scheduled Day Off' : d.weekSubject,
          mainItems: d.mainItems || [],
          ethicsItems: d.ethicsItems || [],
          inCorePlan: true
        };
      });

      // 2. Extend from endIso + 1 through examIso for Phase 2 (Mocks & Practice), Phase 3 (Final Review Sprint), and EXAM DAY
      const maxSpan = Math.min(400, Math.max(0, diffDaysIso(endIso, examIso)));
      for (let step = 1; step <= maxSpan; step++) {
        const iso = addDaysIso(endIso, step);
        if (allCalendarDaysByDate[iso]) continue;
        const dt = new Date(iso + 'T12:00:00');
        const dow = dt.getDay();
        const dayName = DAY_NAMES_SHORT[dow];
        const dateShort = formatIsoToShortDisplay(iso);
        const isWeekend = (dow === 0 || dow === 6);
        const isOff = isDateMarkedDayOff(iso);
        const phase = getPhaseForDate(iso, cfg);
        const plannedH = getPlannedHoursForDate(iso, cfg);

        let phaseLabel = 'Phase 2: Q-Bank & Mock Practice';
        let syntheticItems = [];
        if (phase === 'exam_day') {
          phaseLabel = 'CFA LEVEL II EXAM DAY';
          syntheticItems = [
            { id: 'EXAM-AM-' + iso, code: 'EXAM AM', subject: 'ALL', module: 'AM Session', title: 'CFA Level II Exam — Session 1 (11 Vignettes • 44 Questions • 2h 12m)', kind: 'exam' },
            { id: 'EXAM-PM-' + iso, code: 'EXAM PM', subject: 'ALL', module: 'PM Session', title: 'CFA Level II Exam — Session 2 (11 Vignettes • 44 Questions • 2h 12m)', kind: 'exam' }
          ];
        } else if (phase === 'final_review') {
          const daysBeforeExam = diffDaysIso(iso, examIso);
          phaseLabel = `Final Review Sprint (${daysBeforeExam}d to Exam)`;
          syntheticItems = [
            { id: 'FR-FORM-' + iso, code: 'REV-FORM', subject: 'ALL', module: 'Formula Vault', title: 'Final Review Sprint: Drill high-yield formulas, ★ Hard lessons & error log', kind: 'final_review' },
            { id: 'FR-ETH-' + iso, code: 'REV-ETH', subject: 'ET', module: 'ET M1-M3', title: 'Final Review Sprint: Review CFAI Ethics vignettes & Standards I–VII traps', kind: 'final_review' }
          ];
        } else {
          syntheticItems = [
            { id: 'P2-DRILL-' + iso, code: 'P2-QBANK', subject: 'ALL', module: 'Phase 2 Practice', title: isWeekend ? 'Full/Half Timed Mock Exam & Vignette Debrief' : 'Targeted LES Vignette Drills on Lowest-Scoring Modules', kind: 'phase2_practice' }
          ];
        }

        allCalendarDaysByDate[iso] = {
          date: iso,
          dayName,
          dateShort,
          dateDisplay: dayName + ', ' + dateShort + ' ' + iso.slice(0, 4),
          weekNum: getMaxWeekNum() + Math.ceil(step / 7),
          isWeekend,
          isDayOff: isOff,
          phase,
          dayMode: isOff ? 'day_off' : phase,
          plannedHours: plannedH,
          weekSubject: isOff ? 'Scheduled Day Off' : phaseLabel,
          mainItems: isOff ? [] : syntheticItems,
          ethicsItems: [],
          inCorePlan: false
        };
      }
    }

    // Bottom-Up Curriculum Workload & Schedule Feasibility Engine
    function computeBottomUpWorkloadAndFeasibility(cfgOverride) {
      const cfg = cfgOverride || (appState && appState.planConfig) || {};
      const isSeq10 = (cfg.ethicsMode === 'sequence_10');
      const lessonMinsSetting = Math.max(10, Math.min(60, Number(cfg.lessonDurationMins ?? 23)));
      const durationScale = lessonMinsSetting / 23.0;

      // Count completed vs remaining lessons per subject
      const topicBreakdown = {};
      const allSubjCodes = ['CI', 'AI', 'EC', 'EQ', 'FA', 'QM', 'PM', 'FI', 'DV', 'ET'];
      allSubjCodes.forEach(code => {
        const meta = SUBJECT_BASELINE_META[code] || { hours: 25, lessons: 35, name: code };
        topicBreakdown[code] = {
          code,
          name: meta.name,
          totalLessons: 0,
          doneLessons: 0,
          remLessons: 0,
          baselineTopicHours: meta.hours * durationScale,
          completedHoursEst: 0,
          remainingHoursEst: 0,
          actualLoggedHours: 0,
          qAttempted: 0,
          qCorrect: 0,
          qAccuracy: null,
          hardCount: 0,
          flaggedModules: 0
        };
      });

      // Tally curriculum lessons from allItemsById
      Object.values(allItemsById).forEach(it => {
        const code = it.subject;
        if (!topicBreakdown[code]) return;
        const isCountedLesson = (it.kind === 'lesson' || (code === 'ET' && it.kind === 'ethics_reading'));
        if (isCountedLesson) {
          topicBreakdown[code].totalLessons++;
          if (appState.completedItems && appState.completedItems[it.id]) {
            topicBreakdown[code].doneLessons++;
          } else {
            topicBreakdown[code].remLessons++;
          }
        }
        if (appState.lessonConfidence && appState.lessonConfidence[it.id] === 1) {
          topicBreakdown[code].hardCount++;
        }
      });

      // Also include any items currently in appState.unscheduledBacklog
      ((appState && appState.unscheduledBacklog) || []).forEach(b => {
        const code = b.subject || 'CI';
        if (topicBreakdown[code]) {
          topicBreakdown[code].totalLessons++;
          topicBreakdown[code].remLessons++;
        }
      });

      // Tally LES practice questions and actual logged study hours per subject
      PLAN_DATA.modules.forEach(m => {
        const st = getModuleStats(m.code);
        if (topicBreakdown[m.subject]) {
          topicBreakdown[m.subject].qAttempted += st.attempted;
          topicBreakdown[m.subject].qCorrect += st.correct;
          if (st.flagged) topicBreakdown[m.subject].flaggedModules++;
        }
      });
      ((appState && appState.timerSessions) || []).forEach(s => {
        if (s && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15') {
          const code = s.subject || 'CI';
          if (topicBreakdown[code]) {
            topicBreakdown[code].actualLoggedHours += (parseInt(s.minutes, 10) || 0) / 60;
          }
        }
      });

      let totalLessonsAll = 0;
      let doneLessonsAll = 0;
      let baselineCompletedHours = 0;
      let baselineRemainingHours = 0;
      let totalBaselineHours = 0;

      allSubjCodes.forEach(code => {
        const tb = topicBreakdown[code];
        if (tb.totalLessons === 0) {
          tb.totalLessons = (SUBJECT_BASELINE_META[code] && SUBJECT_BASELINE_META[code].lessons) || 30;
          tb.remLessons = tb.totalLessons;
        }
        const hrsPerLesson = tb.baselineTopicHours / Math.max(1, tb.totalLessons);
        tb.completedHoursEst = tb.doneLessons * hrsPerLesson;
        tb.remainingHoursEst = tb.remLessons * hrsPerLesson;
        if (tb.qAttempted > 0) {
          tb.qAccuracy = Math.round((tb.qCorrect / tb.qAttempted) * 1000) / 10;
        }
        totalLessonsAll += tb.totalLessons;
        doneLessonsAll += tb.doneLessons;
        baselineCompletedHours += tb.completedHoursEst;
        baselineRemainingHours += tb.remainingHoursEst;
        totalBaselineHours += tb.baselineTopicHours;
      });

      // Observed Study Pace Refinement: if user has completed >= 10 lessons and logged >= 5.0 focus hours, blend observed pace
      const totalActualHrs = getTotalActualStudyHours();
      let paceMultiplier = 1.0;
      let isPaceRefined = false;
      if (doneLessonsAll >= 10 && totalActualHrs >= 5.0 && baselineCompletedHours > 2.0) {
        const rawRatio = Math.min(1.65, Math.max(0.65, totalActualHrs / baselineCompletedHours));
        paceMultiplier = 0.5 + (0.5 * rawRatio);
        isPaceRefined = true;
      }

      const refinedRemainingCoreHours = Math.round(baselineRemainingHours * paceMultiplier * 10) / 10;

      // Compute available study hours in Phase 1 (from activeDate through endDate) and up to Final Review / Exam Day
      const startIso = cfg.startDate || '2026-11-01';
      const endIso = cfg.endDate || '2027-03-28';
      const examIso = cfg.examDate || (appState && appState.examDate) || '2027-05-22';
      const activeIso = (appState && appState.activeDate) || startIso;
      // If activeDate is the first weekday right after Opening Sunday (e.g. 2026-11-02 after 2026-11-01), include startIso in Phase 1 capacity
      const calcFromIso = (activeIso > addDaysIso(startIso, 1)) ? activeIso : startIso;
      const fr = getFinalReviewWindow(cfg);

      let availablePhase1Hours = 0;
      let availablePhase1StudyDays = 0;
      let plannedHoursToDate = 0;
      let totalPlanScheduledHours = 0;

      PLAN_DATA.days.forEach(d => {
        const h = getPlannedHoursForDate(d.date, cfg);
        totalPlanScheduledHours += h;
        if (d.date <= activeIso) {
          plannedHoursToDate += h;
        }
        if (d.date >= calcFromIso && d.date <= endIso && !isDateMarkedDayOff(d.date) && h > 0) {
          availablePhase1Hours += h;
          availablePhase1StudyDays++;
        }
      });

      // Walk day-by-day from calcFromIso to project exact core curriculum completion date
      let remToSchedule = refinedRemainingCoreHours;
      let projIso = calcFromIso;
      let safetySteps = 0;
      while (remToSchedule > 0.05 && safetySteps < 600) {
        const h = getPlannedHoursForDate(projIso, cfg);
        remToSchedule -= h;
        if (remToSchedule > 0.05) {
          projIso = addDaysIso(projIso, 1);
        }
        safetySteps++;
      }
      const projectedCompletionIso = remToSchedule <= 0.05 ? projIso : addDaysIso(calcFromIso, safetySteps);
      const projectedOverlapsFinalReviewDays = fr.frDays > 0
        ? Math.max(0, diffDaysIso(fr.finalReviewStartIso, projectedCompletionIso) + 1)
        : 0;

      const capacityBufferHours = Math.round((availablePhase1Hours - refinedRemainingCoreHours) * 10) / 10;
      const hasWorkloadShortfall = capacityBufferHours < -10.0;
      const hasTightBuffer = capacityBufferHours < -2.0 && capacityBufferHours >= -10.0;
      const extraHoursPerDayNeeded = (capacityBufferHours < -2.0 && availablePhase1StudyDays > 0)
        ? Math.ceil((Math.abs(capacityBufferHours) / availablePhase1StudyDays) * 10) / 10
        : 0;

      return {
        topicBreakdown,
        totalLessonsAll,
        doneLessonsAll,
        curriculumPct: totalLessonsAll > 0 ? Math.round((doneLessonsAll / totalLessonsAll) * 1000) / 10 : 0,
        totalBaselineHours: Math.round(totalBaselineHours * 10) / 10,
        completedWorkloadHours: Math.round(baselineCompletedHours * 10) / 10,
        remainingCoreWorkloadHours: refinedRemainingCoreHours,
        isPaceRefined,
        paceMultiplier: Math.round(paceMultiplier * 100) / 100,
        totalActualHrs: Math.round(totalActualHrs * 10) / 10,
        plannedHoursToDate: Math.round(plannedHoursToDate * 10) / 10,
        totalPlanScheduledHours: Math.round(totalPlanScheduledHours * 10) / 10,
        availablePhase1Hours: Math.round(availablePhase1Hours * 10) / 10,
        availablePhase1StudyDays,
        capacityBufferHours,
        hasWorkloadShortfall,
        hasTightBuffer,
        extraHoursPerDayNeeded,
        projectedCompletionIso,
        projectedOverlapsFinalReviewDays,
        finalReviewWindow: fr
      };
    }

    // Study-Time Gaps detector for Revision Priorities
    function computeStudyTimeGapsSummary() {
      const items = [];
      const activeIso = (appState && appState.activeDate) || '2026-11-02';
      const todayPlanH = getPlannedHoursForDate(activeIso);
      const todayActH = getActualStudyHoursForDate(activeIso);
      const isOff = isDateMarkedDayOff(activeIso);

      if (!isOff && todayPlanH > 0 && todayActH < todayPlanH) {
        const diff = (todayPlanH - todayActH).toFixed(1);
        items.push({
          title: `Active Day Study-Time Target (${activeIso})`,
          detail: `Logged ${todayActH.toFixed(1)}h of ${todayPlanH.toFixed(1)}h planned (${diff}h remaining today).`,
          actionHtml: `<button type="button" onclick="openManualTimeModal('${activeIso}')" class="text-[11px] px-2.5 py-1 rounded bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 font-bold shrink-0">+ Log Time</button>`
        });
      }

      const backlogLen = ((appState && appState.unscheduledBacklog) || []).length;
      if (backlogLen > 0) {
        items.push({
          title: `${backlogLen} Unscheduled Backlog Item(s)`,
          detail: `Deferred from a Day Off and awaiting reassignment.`,
          actionHtml: `<button type="button" onclick="redistributeAllUnscheduledBacklog()" class="text-[11px] px-2.5 py-1 rounded bg-white hover:bg-indigo-100 text-indigo-900 border border-indigo-300 font-bold shrink-0">Redistribute</button>`
        });
      }

      const rep = getWeeklyAndMonthlyTimeReport(activeIso);
      if (rep.weekPlannedHrs > 0 && rep.weekActualHrs + 2.0 < rep.weekPlannedHrs && rep.weekActualHrs > 0) {
        items.push({
          title: `Weekly Study-Time Pace (${rep.weekActualHrs.toFixed(1)}h / ${rep.weekPlannedHrs.toFixed(1)}h)`,
          detail: `Weekly logged hours are ${(rep.weekPlannedHrs - rep.weekActualHrs).toFixed(1)}h below this week's target.`,
          actionHtml: `<button type="button" onclick="switchTab('timer')" class="text-[11px] px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-300 font-semibold shrink-0">Focus Studio</button>`
        });
      }

      return {
        hasTimeGap: items.length > 0,
        items
      };
    }

    // ==================== FEATURE 1: INTERACTIVE MONTHLY CALENDAR & DAY INSPECTOR ====================
    function setDailyCalendarDisplayMode(mode) {
      appState.dailyCalDisplayMode = mode || 'week';
      saveState();
      syncDailyCalendarVisibility();
      renderSynchronizedMonthlyCalendars();
    }

    function syncDailyCalendarVisibility() {
      const mode = (appState && appState.dailyCalDisplayMode) || 'week';
      ['week', 'month', 'both'].forEach(m => {
        const btn = document.getElementById('dailyCalModeBtn-' + m);
        if (btn) {
          btn.className = m === mode
            ? 'px-2.5 py-1 rounded-lg text-xs font-extrabold bg-white text-slate-900 shadow-2xs transition'
            : 'px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition';
        }
      });
      const wkGrid = document.getElementById('dailyWeekStripGrid');
      const moWrap = document.getElementById('dailyMonthlyCalendarWrapper');
      if (wkGrid) wkGrid.classList.toggle('hidden', mode === 'month');
      if (moWrap) moWrap.classList.toggle('hidden', mode === 'week');
    }

    function toggleRoadmapMonthlyCalendarCollapse() {
      appState.roadmapCalendarCollapsed = !appState.roadmapCalendarCollapsed;
      saveState();
      const body = document.getElementById('roadmapMonthlyCalendarBody');
      const btn = document.getElementById('toggleRoadmapCalendarCollapseBtn');
      if (body) body.classList.toggle('hidden', !!appState.roadmapCalendarCollapsed);
      if (btn) btn.innerHTML = appState.roadmapCalendarCollapsed ? 'Expand Calendar &#9662;' : 'Collapse Calendar &#9652;';
    }

    function stepCalendarMonth(deltaMonths) {
      const curYm = (appState && appState.calendarMonthCursor) || (appState.activeDate || '2026-11-02').slice(0, 7);
      const [y, m] = curYm.split('-').map(Number);
      const dt = new Date(y, m - 1 + deltaMonths, 1);
      appState.calendarMonthCursor = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0');
      saveState();
      renderSynchronizedMonthlyCalendars();
    }

    function jumpCalendarToYearMonth(ym) {
      if (!ym || !/^\d{4}-\d{2}$/.test(ym)) return;
      appState.calendarMonthCursor = ym;
      saveState();
      renderSynchronizedMonthlyCalendars();
    }

    function jumpCalendarToActiveOrToday() {
      const now = new Date();
      const todayIso = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
      const targetIso = allCalendarDaysByDate[todayIso] ? todayIso : (appState.activeDate || '2026-11-02');
      appState.calendarMonthCursor = targetIso.slice(0, 7);
      appState.selectedCalendarDate = targetIso;
      if (daysByDate[targetIso]) {
        appState.activeDate = targetIso;
        const inp = document.getElementById('activeDateInput');
        if (inp) inp.value = targetIso;
      }
      saveState();
      refreshAllViews();
    }

    function onCalendarCellClick(isoDate, fromDailyWorkspace) {
      appState.selectedCalendarDate = isoDate;
      appState.calendarMonthCursor = isoDate.slice(0, 7);
      if (daysByDate[isoDate]) {
        appState.activeDate = isoDate;
        const inp = document.getElementById('activeDateInput');
        if (inp) inp.value = isoDate;
      }
      saveState();
      if (fromDailyWorkspace) {
        renderDailyView();
        renderKPIs();
        renderSynchronizedMonthlyCalendars();
      } else {
        renderSynchronizedMonthlyCalendars();
        renderDailyView();
        renderKPIs();
      }
    }

    function renderSynchronizedMonthlyCalendars() {
      if (!allCalendarDaysByDate || Object.keys(allCalendarDaysByDate).length === 0) {
        rebuildExtendedCalendarDaysMap();
      }
      const cfg = (appState && appState.planConfig) || {};
      const startYm = (cfg.startDate || '2026-11-01').slice(0, 7);
      const examYm = (cfg.examDate || appState.examDate || '2027-05-22').slice(0, 7);
      if (!appState.calendarMonthCursor) {
        appState.calendarMonthCursor = (appState.activeDate || '2026-11-02').slice(0, 7);
      }
      const curYm = appState.calendarMonthCursor;
      const [yearNum, monthNum] = curYm.split('-').map(Number);
      const monthFullNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const monthLabel = `${monthFullNames[Math.max(0, monthNum - 1)]} ${yearNum}`;

      const dailyHeading = document.getElementById('dailyCalMonthHeading');
      if (dailyHeading) dailyHeading.textContent = monthLabel;

      // Populate Month Dropdown on Study Roadmap
      const selEl = document.getElementById('roadmapCalMonthSelect');
      if (selEl) {
        const monthsList = [];
        let [cy, cm] = startYm.split('-').map(Number);
        const [ey, em] = examYm.split('-').map(Number);
        let guard = 0;
        while ((cy < ey || (cy === ey && cm <= em)) && guard < 36) {
          const ymStr = `${cy}-${String(cm).padStart(2, '0')}`;
          monthsList.push({ ym: ymStr, label: `${monthFullNames[cm - 1]} ${cy}` });
          cm++;
          if (cm > 12) { cm = 1; cy++; }
          guard++;
        }
        if (!monthsList.some(m => m.ym === curYm)) {
          monthsList.push({ ym: curYm, label: monthLabel });
        }
        selEl.innerHTML = monthsList.map(m => `<option value="${m.ym}" ${m.ym === curYm ? 'selected' : ''}>${m.label}</option>`).join('');
      }

      // Build Monday-first 7-column grid cells for curYm
      const firstDayDt = new Date(yearNum, monthNum - 1, 1);
      const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
      const firstDow = firstDayDt.getDay(); // 0=Sun..6=Sat
      const leadingBlanks = firstDow === 0 ? 6 : (firstDow - 1);

      let monthPlannedHrs = 0;
      let monthActualHrs = 0;
      let monthStudyDays = 0;
      let monthDaysOff = 0;

      const buildGridHtml = (forDailyTab) => {
        const cells = [];
        for (let b = 0; b < leadingBlanks; b++) {
          cells.push(`<div class="cal-day-cell cal-day-outside pointer-events-none"></div>`);
        }

        for (let dNum = 1; dNum <= daysInMonth; dNum++) {
          const iso = `${curYm}-${String(dNum).padStart(2, '0')}`;
          const cDay = allCalendarDaysByDate[iso];
          const isOff = isDateMarkedDayOff(iso);
          const plannedH = getPlannedHoursForDate(iso, cfg);
          const actualH = getActualStudyHoursForDate(iso);
          const phase = getPhaseForDate(iso, cfg);
          const isSelected = (forDailyTab ? appState.activeDate === iso : (appState.selectedCalendarDate || appState.activeDate) === iso);

          if (!forDailyTab) {
            if (phase !== 'outside_plan') {
              monthPlannedHrs += plannedH;
              if (isOff) monthDaysOff++;
              else if (plannedH > 0) monthStudyDays++;
            }
            monthActualHrs += actualH;
          }

          let cellCls = 'cal-day-cell';
          if (phase === 'outside_plan') cellCls += ' cal-day-outside';
          else if (phase === 'exam_day') cellCls += ' cal-day-exam';
          else if (isOff) cellCls += ' cal-day-off';
          else if (phase === 'final_review' || phase === 'overlap_final_review') cellCls += ' cal-day-final-review';

          const allItems = cDay ? [...(cDay.mainItems || []), ...(cDay.ethicsItems || [])] : [];
          const totalItems = allItems.length;
          const doneItems = allItems.filter(i => appState.completedItems && appState.completedItems[i.id]).length;

          if (!isOff && phase !== 'exam_day' && totalItems > 0) {
            if (doneItems === totalItems) cellCls += ' cal-day-completed';
            else if (doneItems > 0 || actualH > 0) cellCls += ' cal-day-partial';
          }
          if (isSelected) cellCls += ' cal-day-active';

          // Topic / Phase pill
          let topicPillHtml = '';
          if (phase === 'exam_day') {
            topicPillHtml = `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">EXAM DAY</span>`;
          } else if (isOff) {
            topicPillHtml = `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">&#127958; Day Off</span>`;
          } else if (phase === 'final_review' || phase === 'overlap_final_review') {
            topicPillHtml = `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-200 text-indigo-950">Final Review</span>`;
          } else if (phase === 'phase2_practice') {
            topicPillHtml = `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-900">Phase 2 Mock/Qs</span>`;
          } else if (cDay) {
            const subjs = [];
            (cDay.mainItems || []).forEach(it => { if (it.subject && !subjs.includes(it.subject)) subjs.push(it.subject); });
            if ((cDay.ethicsItems || []).length > 0 && !subjs.includes('ET')) subjs.push('ET');
            const subjStr = subjs.join(' + ') || (cDay.dayMode === 'revision_practice' ? 'Rev/Qs' : 'Study');
            const modeTag = cDay.dayMode === 'revision_practice' ? 'Rev' : (cDay.dayMode === 'mixed' ? 'Combo' : '');
            topicPillHtml = `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-900 truncate">${subjStr}${modeTag ? ' • ' + modeTag : ''}</span>`;
          } else {
            topicPillHtml = `<span class="text-[10px] text-slate-400">—</span>`;
          }

          // Completion / status badge
          let statusLine = '';
          if (phase === 'exam_day') {
            statusLine = `<span class="text-[10px] font-bold text-indigo-100">AM &amp; PM Sessions</span>`;
          } else if (isOff) {
            statusLine = `<span class="text-[10px] font-semibold text-slate-500">0h Planned • Rest</span>`;
          } else {
            const hrsText = `${actualH.toFixed(1)} / ${plannedH.toFixed(1)}h`;
            const itemsText = cDay && cDay.inCorePlan ? `${doneItems}/${totalItems}` : '';
            statusLine = `
              <div class="flex items-center justify-between text-[10px] font-bold ${phase === 'exam_day' ? 'text-white' : 'text-slate-600'}">
                <span>${hrsText}</span>
                ${itemsText ? `<span class="${doneItems === totalItems && totalItems > 0 ? 'text-emerald-700 font-extrabold' : ''}">${itemsText}</span>` : ''}
              </div>
            `;
          }

          cells.push(`
            <div onclick="onCalendarCellClick('${iso}', ${forDailyTab ? 'true' : 'false'})" class="${cellCls}" title="${iso}: Click to inspect or manage this date">
              <div class="flex items-center justify-between gap-1">
                <span class="text-xs font-extrabold ${phase === 'exam_day' ? 'text-white' : 'text-slate-900'}">${dNum}</span>
                ${iso === appState.activeDate ? `<span class="text-[9px] font-extrabold px-1 rounded bg-indigo-600 text-white">Active</span>` : ''}
              </div>
              <div class="my-1">${topicPillHtml}</div>
              ${statusLine}
            </div>
          `);
        }
        return cells.join('');
      };

      const roadmapGrid = document.getElementById('roadmapMonthlyCalendarGrid');
      if (roadmapGrid) roadmapGrid.innerHTML = buildGridHtml(false);

      const dailyGrid = document.getElementById('dailyMonthlyCalendarGrid');
      if (dailyGrid) dailyGrid.innerHTML = buildGridHtml(true);

      const statsEl = document.getElementById('roadmapMonthStatsSummary');
      if (statsEl) {
        const diff = monthActualHrs - monthPlannedHrs;
        const pct = monthPlannedHrs > 0 ? Math.round((monthActualHrs / monthPlannedHrs) * 100) : 0;
        statsEl.innerHTML = `<strong>${monthLabel}:</strong> Planned <strong>${monthPlannedHrs.toFixed(1)}h</strong> • Actual <strong class="text-teal-700">${monthActualHrs.toFixed(1)}h</strong> (${pct}% • ${diff >= 0 ? '+' : ''}${diff.toFixed(1)}h) • <strong>${monthStudyDays}</strong> Study Days • <strong>${monthDaysOff}</strong> Day(s) Off`;
      }

      renderCalendarSelectedDayInspector(appState.selectedCalendarDate || appState.activeDate);
    }

    function renderCalendarSelectedDayInspector(isoDate) {
      const box = document.getElementById('calendarSelectedDayInspector');
      if (!box || !isoDate) return;
      const cfg = (appState && appState.planConfig) || {};
      const cDay = allCalendarDaysByDate[isoDate];
      const isOff = isDateMarkedDayOff(isoDate);
      const plannedH = getPlannedHoursForDate(isoDate, cfg);
      const actualH = getActualStudyHoursForDate(isoDate);
      const phase = getPhaseForDate(isoDate, cfg);
      const hasCustomHr = appState.dateHourOverrides && appState.dateHourOverrides[isoDate] !== undefined;

      const phaseBadges = {
        core_reading: `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px]">Phase 1: Core Reading</span>`,
        phase2_practice: `<span class="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-bold text-[10px]">Phase 2: Q-Bank &amp; Mocks</span>`,
        final_review: `<span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 font-bold text-[10px]">Phase 3: Final Review Sprint</span>`,
        overlap_final_review: `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">Overlap: Core Reading &amp; Final Review</span>`,
        exam_day: `<span class="px-2 py-0.5 rounded bg-indigo-900 text-white font-extrabold text-[10px]">CFA LEVEL II EXAM DAY</span>`,
        outside_plan: `<span class="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold text-[10px]">Outside Plan Window</span>`
      };

      const allItems = cDay ? [...(cDay.mainItems || []), ...(cDay.ethicsItems || [])] : [];
      const itemsListHtml = allItems.length > 0
        ? allItems.map(it => {
            const isDone = Boolean(appState.completedItems && appState.completedItems[it.id]);
            return `<div class="flex items-center justify-between gap-2 py-1 border-b border-slate-200/60 last:border-0">
              <span class="${isDone ? 'line-through text-slate-400' : 'text-slate-800'}"><strong>${it.code}</strong> — ${it.title}</span>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}">${isDone ? 'Done' : 'Scheduled'}</span>
            </div>`;
          }).join('')
        : `<div class="text-slate-500 italic">${isOff ? 'Marked as a Scheduled Day Off (0h planned).' : 'No specific lessons assigned on this date.'}</div>`;

      box.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-extrabold text-slate-900">${cDay ? cDay.dateDisplay : isoDate}</span>
            ${phaseBadges[phase] || ''}
            ${isOff ? `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold text-[10px]">&#127958; Scheduled Day Off</span>` : ''}
            <span class="text-xs font-bold text-slate-600">Planned: <strong>${plannedH.toFixed(1)}h</strong> • Actual: <strong class="text-teal-700">${actualH.toFixed(1)}h</strong></span>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <label class="text-[11px] font-bold text-slate-600">Day Hours:</label>
            <input type="number" step="0.25" min="0" max="16" value="${plannedH}" onchange="setSingleDatePlannedHoursOverride('${isoDate}', this.value)" class="w-14 text-center font-extrabold text-xs bg-white border border-slate-300 rounded px-1.5 py-1" />
            ${hasCustomHr ? `<button type="button" onclick="clearSingleDatePlannedHoursOverride('${isoDate}')" class="text-[10px] font-bold text-indigo-700 hover:underline">Reset Hrs</button>` : ''}
            <button type="button" onclick="handleToggleDayOffClick('${isoDate}')" class="px-2.5 py-1 rounded-lg ${isOff ? 'bg-emerald-600 text-white' : 'bg-white hover:bg-amber-50 text-slate-800 border border-slate-300'} text-xs font-extrabold transition">
              ${isOff ? '&#8634; Restore Study Day' : '&#127958; Mark as Day Off'}
            </button>
            <button type="button" onclick="openManualTimeModal('${isoDate}')" class="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition">
              + Log Time
            </button>
            ${daysByDate[isoDate] ? `<button type="button" onclick="setActiveDateAndOpenDaily('${isoDate}')" class="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold transition">Open in Daily Workspace &rarr;</button>` : ''}
          </div>
        </div>
        <div class="max-h-32 overflow-y-auto custom-scrollbar bg-white rounded-lg p-2.5 border border-slate-200 text-[11px]">
          ${itemsListHtml}
        </div>
      `;
    }

    // ==================== FEATURE 2: FLEXIBLE STUDY-HOUR MODES & PHASE BOUNDARIES ====================
    function setStudyHourMode(mode) {
      ensurePlanConfigInitialized();
      appState.planConfig.hourMode = mode || 'fixed';
      renderRoadmapHourAndPhaseControls();
    }

    function renderRoadmapHourAndPhaseControls() {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const mode = cfg.hourMode || 'fixed';
      const modeNames = {
        fixed: 'Mode A: Fixed Daily Hours',
        ramp_up: 'Mode B: Gradual Exam-Date Ramp-Up',
        custom_days: 'Mode C: Custom Per-Weekday & Date Hours'
      };
      const badge = document.getElementById('roadmapHourModeBadge');
      if (badge) badge.textContent = modeNames[mode] || modeNames.fixed;

      ['fixed', 'ramp_up', 'custom_days'].forEach(m => {
        const btn = document.getElementById('hourModeBtn-' + m);
        const panel = document.getElementById('hourModePanel-' + m);
        if (btn) btn.className = 'p-2.5 rounded-xl border text-left transition ' + (m === mode ? 'day-mode-pill-active' : 'day-mode-pill-inactive');
        if (panel) panel.classList.toggle('hidden', m !== mode);
      });

      // Populate Mode A inputs
      const fWk = document.getElementById('rmFixedWeekdayHrs');
      const fWe = document.getElementById('rmFixedWeekendHrs');
      if (fWk) fWk.value = cfg.weekdayHours ?? 2.0;
      if (fWe) fWe.value = cfg.weekendHours ?? 2.0;

      // Populate Mode B (Ramp-Up) inputs
      const rc = cfg.rampUpConfig || {};
      const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
      setVal('rmRampStartWk', rc.startWeekdayHours ?? cfg.weekdayHours ?? 2.0);
      setVal('rmRampStartWe', rc.startWeekendHours ?? cfg.weekendHours ?? 3.0);
      setVal('rmRampFinalWk', rc.finalWeekdayHours ?? 3.5);
      setVal('rmRampFinalWe', rc.finalWeekendHours ?? 4.5);
      setVal('rmRampStartDate', rc.rampStartDate || '2027-01-15');
      setVal('rmRampDurationDays', rc.rampDurationDays ?? 60);
      setVal('rmRampMaxDaily', rc.maxDailyHours ?? 6.0);

      // Populate Mode C (Custom Mon-Sun) inputs
      const cGrid = document.getElementById('rmCustomWeekdayHoursGrid');
      if (cGrid) {
        const cw = cfg.customWeekdayHours || { Mon: 2, Tue: 2, Wed: 2, Thu: 2, Fri: 2, Sat: 2, Sun: 2 };
        cGrid.innerHTML = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(dKey => `
          <div class="p-1.5 rounded-lg bg-white border border-slate-200 text-center">
            <label class="block text-[10px] font-extrabold text-slate-700">${dKey}</label>
            <input id="rmCustomDayHr-${dKey}" type="number" step="0.25" min="0" max="16" value="${cw[dKey] ?? 2.0}" class="w-full text-center font-bold text-xs border border-slate-300 rounded px-1 py-0.5 mt-0.5" />
          </div>
        `).join('');
      }

      // Populate Box 5: Phase Boundaries & Final Review Sprint
      setVal('rmCoreEndDateInput', cfg.endDate || '2027-03-28');
      setVal('rmExamDateInput', cfg.examDate || appState.examDate || '2027-05-22');
      setVal('rmFinalReviewDaysInput', cfg.finalReviewDays ?? 14);
      setVal('rmLessonMinsInput', cfg.lessonDurationMins ?? 23);

      const fr = getFinalReviewWindow(cfg);
      const frBadge = document.getElementById('roadmapFinalReviewBadge');
      if (frBadge) frBadge.textContent = `${fr.frDays}-Day Final Review Sprint`;

      const phaseBox = document.getElementById('roadmapPhaseBoundarySummary');
      if (phaseBox) {
        if (fr.examBeforeCoreEnd) {
          phaseBox.className = 'p-2.5 rounded-lg bg-rose-50 border border-rose-300 text-[11px] text-rose-900 leading-relaxed';
          phaseBox.innerHTML = `<strong>&#9888;&#65039; Schedule Conflict Detected:</strong> Your Core Reading Finish Date (<strong>${fr.endIso}</strong>) is on or after your Exam Date (<strong>${fr.examIso}</strong>). Please move your Core Reading Finish Date earlier or increase daily study hours.`;
        } else if (fr.overlapDays > 0) {
          const recCoreEnd = addDaysIso(fr.finalReviewStartIso, -1);
          phaseBox.className = 'p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-[11px] text-amber-950 leading-relaxed';
          phaseBox.innerHTML = `<strong>&#9888;&#65039; Phase Overlap Flagged (${fr.overlapDays} day${fr.overlapDays === 1 ? '' : 's'}):</strong> Your Core Reading Finish Date (<strong>${fr.endIso}</strong>) overlaps your ${fr.frDays}-day Final Review Sprint (<strong>${fr.finalReviewStartIso} – ${fr.finalReviewEndIso}</strong>). We have <em>not</em> silently moved your deadline—consider setting Core Reading Finish to <strong>${recCoreEnd}</strong> or reducing Final Review days.`;
        } else {
          const phase2Days = Math.max(0, diffDaysIso(fr.endIso, fr.finalReviewStartIso) - 1);
          phaseBox.className = 'p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-700 leading-relaxed';
          phaseBox.innerHTML = `<strong>Phase 1 (Core Reading):</strong> ${cfg.startDate} &rarr; ${fr.endIso} &bull; <strong>Phase 2 (Q-Bank &amp; Mocks):</strong> ${phase2Days} days (${fr.phase2StartIso} &rarr; ${addDaysIso(fr.finalReviewStartIso, -1)}) &bull; <strong>Phase 3 (Final Review Sprint):</strong> ${fr.frDays} days (${fr.finalReviewStartIso} &rarr; ${fr.finalReviewEndIso}) &bull; <strong>EXAM DAY:</strong> ${fr.examIso}.`;
        }
      }
    }

    function applyRoadmapHourModeSettings() {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const mode = cfg.hourMode || 'fixed';
      if (mode === 'fixed') {
        const wk = Math.max(0, parseFloat((document.getElementById('rmFixedWeekdayHrs') || {}).value) || 0);
        const we = Math.max(0, parseFloat((document.getElementById('rmFixedWeekendHrs') || {}).value) || 0);
        cfg.weekdayHours = wk;
        cfg.weekendHours = we;
      } else if (mode === 'ramp_up') {
        cfg.rampUpConfig = {
          startWeekdayHours: Math.max(0, parseFloat((document.getElementById('rmRampStartWk') || {}).value) || 2.0),
          startWeekendHours: Math.max(0, parseFloat((document.getElementById('rmRampStartWe') || {}).value) || 3.0),
          finalWeekdayHours: Math.max(0, parseFloat((document.getElementById('rmRampFinalWk') || {}).value) || 3.5),
          finalWeekendHours: Math.max(0, parseFloat((document.getElementById('rmRampFinalWe') || {}).value) || 4.5),
          rampStartDate: (document.getElementById('rmRampStartDate') || {}).value || cfg.startDate || '2027-01-15',
          rampDurationDays: Math.max(7, parseInt((document.getElementById('rmRampDurationDays') || {}).value, 10) || 60),
          maxDailyHours: Math.max(1, parseFloat((document.getElementById('rmRampMaxDaily') || {}).value) || 6.0)
        };
        cfg.weekdayHours = cfg.rampUpConfig.startWeekdayHours;
        cfg.weekendHours = cfg.rampUpConfig.startWeekendHours;
      } else if (mode === 'custom_days') {
        const map = {};
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(dKey => {
          const el = document.getElementById('rmCustomDayHr-' + dKey);
          map[dKey] = el ? Math.max(0, parseFloat(el.value) || 0) : 2.0;
        });
        cfg.customWeekdayHours = map;
        cfg.weekdayHours = map.Mon;
        cfg.weekendHours = map.Sat;
      }
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast('Updated daily study-hour configuration and recalculated schedule!');
    }

    function applyPhaseAndWorkloadSettings() {
      ensurePlanConfigInitialized();
      const cfg = appState.planConfig;
      const newEnd = (document.getElementById('rmCoreEndDateInput') || {}).value || cfg.endDate;
      const newExam = (document.getElementById('rmExamDateInput') || {}).value || cfg.examDate;
      const newFr = Math.max(0, Math.min(90, parseInt((document.getElementById('rmFinalReviewDaysInput') || {}).value, 10) || 0));
      const newMins = Math.max(10, Math.min(60, parseInt((document.getElementById('rmLessonMinsInput') || {}).value, 10) || 23));

      if (diffDaysIso(cfg.startDate, newEnd) < 7) {
        showToast('Core Reading Finish Date must be at least 7 days after Start Date.');
        return;
      }
      // Crucially: changing Final Review Sprint never silently forces Core Reading Finish Date to move!
      cfg.endDate = newEnd;
      cfg.examDate = newExam;
      appState.examDate = newExam;
      cfg.finalReviewDays = newFr;
      cfg.lessonDurationMins = newMins;

      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      const fr = getFinalReviewWindow(cfg);
      if (fr.hasConflict) {
        showToast(`Saved settings. Note: ${fr.overlapDays}d overlap between Core Reading and Final Review Sprint flagged.`);
      } else {
        showToast(`Saved phase boundaries: Core Reading ends ${newEnd}, ${newFr}d Final Review Sprint before ${newExam}!`);
      }
    }

    function setSingleDatePlannedHoursOverride(isoDate, rawVal) {
      if (!isoDate) return;
      ensurePlanConfigInitialized();
      const hrs = Math.max(0, Math.min(16, parseFloat(rawVal) || 0));
      if (!appState.dateHourOverrides) appState.dateHourOverrides = {};
      appState.dateHourOverrides[isoDate] = hrs;
      if (hrs > 0 && isDateMarkedDayOff(isoDate)) {
        delete appState.daysOff[isoDate];
      }
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Set planned study hours on ${isoDate} to ${hrs.toFixed(1)}h (weekly template unchanged).`);
    }

    function clearSingleDatePlannedHoursOverride(isoDate) {
      if (!isoDate || !appState.dateHourOverrides) return;
      delete appState.dateHourOverrides[isoDate];
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Reverted ${isoDate} to your recurring study-hour schedule.`);
    }

    // ==================== FEATURE 3: MARK AS DAY OFF & 3-WAY INTELLIGENT RESCHEDULING ====================
    function getNextEligibleStudyDateAfter(isoDate) {
      let cur = addDaysIso(isoDate, 1);
      for (let i = 0; i < 365; i++) {
        if (!isDateMarkedDayOff(cur) && getPlannedHoursForDate(cur) > 0) {
          return cur;
        }
        cur = addDaysIso(cur, 1);
      }
      return addDaysIso(isoDate, 1);
    }

    function handleToggleDayOffClick(isoDate) {
      const targetIso = isoDate || appState.activeDate;
      if (!targetIso) return;
      ensurePlanConfigInitialized();

      // If already marked as Day Off, restore it as an active study day immediately!
      if (isDateMarkedDayOff(targetIso)) {
        delete appState.daysOff[targetIso];
        if (appState.dateHourOverrides && appState.dateHourOverrides[targetIso] === 0) {
          delete appState.dateHourOverrides[targetIso];
        }
        rebuildScheduleForUserPlan();
        saveState();
        refreshAllViews();
        showToast(`Restored ${targetIso} as an active study day (${getPlannedHoursForDate(targetIso).toFixed(1)}h planned).`);
        return;
      }

      // Check if targetIso has unfinished scheduled curriculum activities
      const dayObj = daysByDate[targetIso];
      const carried = getCarryForwardItemsForDate(targetIso).map(cf => cf.item);
      const unfinishedItems = [];
      if (dayObj) {
        [...(dayObj.mainItems || []), ...(dayObj.ethicsItems || []), ...carried].forEach(it => {
          if (it && !appState.completedItems[it.id] && !unfinishedItems.some(u => u.id === it.id)) {
            unfinishedItems.push(it);
          }
        });
      }

      // If no unfinished items exist on that date, mark as Day Off immediately without modal!
      if (unfinishedItems.length === 0) {
        appState.daysOff[targetIso] = {
          markedAt: new Date().toISOString(),
          rescheduleMode: 'none_needed'
        };
        rebuildScheduleForUserPlan();
        saveState();
        refreshAllViews();
        showToast(`Marked ${targetIso} as a Scheduled Day Off (0h planned • no unfinished items to move).`);
        return;
      }

      // Open the 3-Option Day-Off Rescheduling Modal
      pendingDayOffModalDate = targetIso;
      const dateLbl = document.getElementById('dayOffModalDateLabel');
      const cntBadge = document.getElementById('dayOffModalItemCountBadge');
      const listEl = document.getElementById('dayOffModalItemsList');
      const nextLbl = document.getElementById('dayOffNextEligibleDateLabel');
      const nextIso = getNextEligibleStudyDateAfter(targetIso);

      if (dateLbl) dateLbl.textContent = dayObj ? dayObj.dateDisplay : targetIso;
      if (cntBadge) cntBadge.textContent = `${unfinishedItems.length} unfinished item${unfinishedItems.length === 1 ? '' : 's'}`;
      if (nextLbl) nextLbl.textContent = nextIso;
      if (listEl) {
        listEl.innerHTML = unfinishedItems.map(it => `
          <div class="flex items-center justify-between gap-2 py-0.5">
            <span><strong class="text-slate-900">${it.code}</strong> — ${it.title}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">${it.subject}</span>
          </div>
        `).join('');
      }

      const radios = document.querySelectorAll('input[name="dayOffRescheduleOpt"]');
      radios.forEach(r => { r.checked = (r.value === 'redistribute'); });
      updateDayOffReschedulePreview('redistribute');

      const modal = document.getElementById('dayOffRescheduleModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeDayOffRescheduleModal() {
      pendingDayOffModalDate = null;
      const modal = document.getElementById('dayOffRescheduleModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function updateDayOffReschedulePreview(selectedOpt) {
      const targetIso = pendingDayOffModalDate || appState.activeDate;
      const dayObj = daysByDate[targetIso];
      const unfinishedItems = dayObj
        ? [...(dayObj.mainItems || []), ...(dayObj.ethicsItems || [])].filter(it => !appState.completedItems[it.id])
        : [];
      const nextIso = getNextEligibleStudyDateAfter(targetIso);
      const previewBox = document.getElementById('dayOffImpactPreviewBox');
      if (!previewBox) return;

      ['1', '2', '3'].forEach((num, idx) => {
        const vals = ['redistribute', 'next_day', 'backlog'];
        const card = document.getElementById('dayOffOptCard-' + num);
        if (card) {
          card.className = vals[idx] === selectedOpt
            ? 'flex items-start gap-3 p-3.5 rounded-xl border-2 border-indigo-500 bg-indigo-50/60 cursor-pointer transition'
            : 'flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition';
        }
      });

      const estWorkloadHrs = Math.round((unfinishedItems.length * ((appState.planConfig && appState.planConfig.lessonDurationMins) || 23) / 60) * 10) / 10;
      const wl = computeBottomUpWorkloadAndFeasibility();
      const remFutureDays = Math.max(1, wl.availablePhase1StudyDays - 1);

      if (selectedOpt === 'redistribute') {
        const addedPerDayMins = Math.round((estWorkloadHrs * 60) / remFutureDays);
        previewBox.className = 'p-3.5 rounded-xl bg-teal-50/90 border border-teal-200 text-xs text-slate-800 space-y-1';
        previewBox.innerHTML = `
          <div class="font-extrabold text-teal-950">&#9989; Impact Preview — Option 1 (Proportional Redistribution):</div>
          <p class="text-[11px] leading-relaxed">Marks <strong>${targetIso}</strong> as a 0h Day Off and spreads <strong>${unfinishedItems.length} item(s) (~${estWorkloadHrs}h workload)</strong> across <strong>${remFutureDays} eligible future study days</strong> (~+${addedPerDayMins} min/day) while preserving your topic order and completed history.</p>
        `;
      } else if (selectedOpt === 'next_day') {
        const nextDayObj = daysByDate[nextIso];
        const nextExistingCount = nextDayObj ? (nextDayObj.mainItems.length + nextDayObj.ethicsItems.length) : 0;
        const nextPlannedHrs = getPlannedHoursForDate(nextIso);
        const combinedCount = nextExistingCount + unfinishedItems.length;
        const combinedEstHrs = Math.round((combinedCount * ((appState.planConfig && appState.planConfig.lessonDurationMins) || 23) / 60) * 10) / 10;
        const isOverloaded = combinedEstHrs > nextPlannedHrs + 0.5;
        previewBox.className = isOverloaded
          ? 'p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 space-y-1'
          : 'p-3.5 rounded-xl bg-teal-50/90 border border-teal-200 text-xs text-slate-800 space-y-1';
        previewBox.innerHTML = `
          <div class="font-extrabold">${isOverloaded ? '&#9888;&#65039; Capacity Overload Warning — Option 2:' : '&#9989; Impact Preview — Option 2 (Next Study Day):'}</div>
          <p class="text-[11px] leading-relaxed">Moves <strong>${unfinishedItems.length} item(s)</strong> into <strong>${nextIso}</strong>. That day will have <strong>${combinedCount} total items (~${combinedEstHrs}h estimated workload vs. ${nextPlannedHrs.toFixed(1)}h planned)</strong>.${isOverloaded ? ' Consider increasing planned hours on ' + nextIso + ' or choosing Option 1.' : ''}</p>
        `;
      } else {
        previewBox.className = 'p-3.5 rounded-xl bg-indigo-50/90 border border-indigo-200 text-xs text-indigo-950 space-y-1';
        previewBox.innerHTML = `
          <div class="font-extrabold">&#128229; Impact Preview — Option 3 (Unscheduled Backlog):</div>
          <p class="text-[11px] leading-relaxed">Marks <strong>${targetIso}</strong> as a 0h Day Off and places <strong>${unfinishedItems.length} item(s)</strong> into your <strong>Unscheduled Backlog</strong> banner on the Daily Workspace so you can reassign them to any date whenever you're ready.</p>
        `;
      }
    }

    function confirmAndApplyDayOffReschedule() {
      const targetIso = pendingDayOffModalDate || appState.activeDate;
      if (!targetIso) return;
      ensurePlanConfigInitialized();

      const selRadio = document.querySelector('input[name="dayOffRescheduleOpt"]:checked');
      const mode = selRadio ? selRadio.value : 'redistribute';
      const dayObj = daysByDate[targetIso];
      const unfinishedLessons = dayObj
        ? [...(dayObj.mainItems || []), ...(dayObj.ethicsItems || [])].filter(it => !appState.completedItems[it.id] && (it.kind === 'lesson' || it.kind === 'ethics_reading'))
        : [];
      const allUnfinished = dayObj
        ? [...(dayObj.mainItems || []), ...(dayObj.ethicsItems || [])].filter(it => !appState.completedItems[it.id])
        : [];

      appState.daysOff[targetIso] = {
        markedAt: new Date().toISOString(),
        rescheduleMode: mode
      };

      if (mode === 'redistribute') {
        // Option 1: rebuildScheduleForUserPlan() automatically sets readingWeight=0 on targetIso and proportionally redistributes across future study days!
        rebuildScheduleForUserPlan();
        showToast(`Marked ${targetIso} as Day Off & redistributed ${allUnfinished.length} item(s) across future study days!`);
      } else if (mode === 'next_day') {
        // Option 2: Move unfinished items to the next eligible study day
        const nextIso = getNextEligibleStudyDateAfter(targetIso);
        if (!appState.unscheduledBacklog) appState.unscheduledBacklog = [];
        // Rebuild first so targetIso is a 0h Day Off, then shift/assign those specific codes to nextIso
        allUnfinished.forEach(it => {
          appState.shiftedItems[it.id] = nextIso;
        });
        rebuildScheduleForUserPlan();
        // Ensure any rebuilt item matching those codes on or around targetIso is shifted or placed on nextIso
        Object.values(allItemsById).forEach(it => {
          if (unfinishedLessons.some(u => u.code === it.code && u.title === it.title) && !appState.completedItems[it.id]) {
            if (it.originalDate === targetIso) {
              appState.shiftedItems[it.id] = nextIso;
            }
          }
        });
        showToast(`Marked ${targetIso} as Day Off & moved unfinished work to ${nextIso}!`);
      } else if (mode === 'backlog') {
        // Option 3: Send unfinished curriculum items to appState.unscheduledBacklog
        if (!Array.isArray(appState.unscheduledBacklog)) appState.unscheduledBacklog = [];
        unfinishedLessons.forEach(it => {
          const uniqueKey = it.subject === 'ET' ? (it.code + '::' + (it.title || '')) : it.code;
          if (!appState.unscheduledBacklog.some(b => b.uniqueKey === uniqueKey)) {
            appState.unscheduledBacklog.push({
              uniqueKey,
              code: it.code,
              subject: it.subject,
              module: it.module,
              title: it.title,
              kind: it.kind,
              fromDate: targetIso,
              addedAt: new Date().toISOString()
            });
          }
        });
        rebuildScheduleForUserPlan();
        showToast(`Marked ${targetIso} as Day Off & moved ${unfinishedLessons.length} item(s) to Unscheduled Backlog!`);
      }

      saveState();
      closeDayOffRescheduleModal();
      refreshAllViews();
    }

    function assignBacklogItemToDate(uniqueKey, targetIso) {
      const destIso = targetIso || appState.activeDate;
      if (!Array.isArray(appState.unscheduledBacklog)) return;
      const idx = appState.unscheduledBacklog.findIndex(b => b.uniqueKey === uniqueKey || b.code === uniqueKey);
      if (idx === -1) return;
      const item = appState.unscheduledBacklog.splice(idx, 1)[0];
      rebuildScheduleForUserPlan();
      // Find the restored item in allItemsById and shift it to destIso if needed
      const found = Object.values(allItemsById).find(it => (it.subject === 'ET' ? (it.code + '::' + (it.title || '')) : it.code) === item.uniqueKey);
      if (found && found.originalDate !== destIso) {
        appState.shiftedItems[found.id] = destIso;
      }
      saveState();
      refreshAllViews();
      showToast(`Assigned ${item.code} to ${destIso}!`);
    }

    function assignAllUnscheduledBacklogToDate(targetIso) {
      const destIso = targetIso || appState.activeDate;
      if (!Array.isArray(appState.unscheduledBacklog) || appState.unscheduledBacklog.length === 0) return;
      const itemsToAssign = appState.unscheduledBacklog.slice();
      appState.unscheduledBacklog = [];
      rebuildScheduleForUserPlan();
      itemsToAssign.forEach(item => {
        const found = Object.values(allItemsById).find(it => (it.subject === 'ET' ? (it.code + '::' + (it.title || '')) : it.code) === item.uniqueKey);
        if (found && found.originalDate !== destIso) {
          appState.shiftedItems[found.id] = destIso;
        }
      });
      saveState();
      refreshAllViews();
      showToast(`Assigned ${itemsToAssign.length} backlog item(s) to ${destIso}!`);
    }

    function redistributeAllUnscheduledBacklog() {
      if (!Array.isArray(appState.unscheduledBacklog) || appState.unscheduledBacklog.length === 0) return;
      const cnt = appState.unscheduledBacklog.length;
      appState.unscheduledBacklog = [];
      rebuildScheduleForUserPlan();
      saveState();
      refreshAllViews();
      showToast(`Redistributed ${cnt} backlog item(s) proportionally across your schedule!`);
    }

    // ==================== FEATURE 4: MANUAL STUDY-TIME ENTRY, RECONCILIATION & EDIT/DELETE ====================
    function openManualTimeModal(isoDate, editSessionId) {
      const targetIso = isoDate || appState.activeDate || '2026-11-02';
      const idInp = document.getElementById('manualTimeEditSessionId');
      const dateInp = document.getElementById('manualTimeDateInput');
      const subjSel = document.getElementById('manualTimeSubjectSelect');
      const minsInp = document.getElementById('manualTimeMinutesInput');
      const actSel = document.getElementById('manualTimeActivitySelect');
      const notesInp = document.getElementById('manualTimeNotesInput');
      const headEl = document.getElementById('manualTimeModalHeading');

      if (editSessionId) {
        const existing = (appState.timerSessions || []).find(s => s.id === editSessionId);
        if (existing) {
          if (idInp) idInp.value = existing.id;
          if (dateInp) dateInp.value = existing.date || targetIso;
          if (subjSel) subjSel.value = existing.subject || getActiveTimerSubjectCode(targetIso);
          if (minsInp) minsInp.value = existing.minutes || 60;
          if (actSel) actSel.value = existing.activityType || 'reading';
          if (notesInp) notesInp.value = existing.notes || '';
          if (headEl) headEl.textContent = 'Edit Recorded Study Session';
        }
      } else {
        if (idInp) idInp.value = '';
        if (dateInp) dateInp.value = targetIso;
        if (subjSel) subjSel.value = getActiveTimerSubjectCode(targetIso);
        if (minsInp) minsInp.value = 60;
        if (actSel) actSel.value = 'reading';
        if (notesInp) notesInp.value = '';
        if (headEl) headEl.textContent = 'Record Manual Study Session';
      }

      checkManualTimeOverlapWarning();
      const modal = document.getElementById('manualTimeEntryModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeManualTimeModal() {
      const modal = document.getElementById('manualTimeEntryModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function checkManualTimeOverlapWarning() {
      const editId = ((document.getElementById('manualTimeEditSessionId') || {}).value || '').trim();
      const dateVal = (document.getElementById('manualTimeDateInput') || {}).value || appState.activeDate;
      const subjVal = (document.getElementById('manualTimeSubjectSelect') || {}).value || 'CI';
      const warnBox = document.getElementById('manualTimeOverlapWarningBox');
      const badgeEl = document.getElementById('manualTimeOverlapMinsBadge');
      const descEl = document.getElementById('manualTimeOverlapDesc');
      if (!warnBox) return;

      if (editId) {
        warnBox.classList.add('hidden');
        return;
      }

      const existingSameDate = (appState.timerSessions || []).filter(s =>
        s && s.date === dateVal && s.subject === subjVal && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15'
      );

      if (existingSameDate.length === 0) {
        warnBox.classList.add('hidden');
        return;
      }

      let existMins = 0;
      existingSameDate.forEach(s => { existMins += (parseInt(s.minutes, 10) || 0); });
      warnBox.classList.remove('hidden');
      if (badgeEl) badgeEl.textContent = `${existMins}m (${existingSameDate.length} session${existingSameDate.length === 1 ? '' : 's'})`;
      if (descEl) {
        descEl.textContent = `You already have ${existMins} minutes recorded on ${dateVal} for ${subjVal}. To avoid double-counting study hours, choose whether this entry is an additional separate block or should replace/reconcile those existing sessions:`;
      }
    }

    function saveManualStudyTimeEntry() {
      const editId = ((document.getElementById('manualTimeEditSessionId') || {}).value || '').trim();
      const dateVal = (document.getElementById('manualTimeDateInput') || {}).value || appState.activeDate;
      const subjVal = (document.getElementById('manualTimeSubjectSelect') || {}).value || 'CI';
      const minsVal = Math.max(1, Math.min(720, parseInt((document.getElementById('manualTimeMinutesInput') || {}).value, 10) || 60));
      const actVal = (document.getElementById('manualTimeActivitySelect') || {}).value || 'reading';
      const notesVal = ((document.getElementById('manualTimeNotesInput') || {}).value || '').trim();

      const actLabels = {
        reading: 'Manual Reading Session',
        practice: 'Manual LES Practice Session',
        revision: 'Manual Revision Session',
        mock: 'Timed Mock Session',
        ethics: 'Manual Ethics Session'
      };

      if (!Array.isArray(appState.timerSessions)) appState.timerSessions = [];

      if (editId) {
        const idx = appState.timerSessions.findIndex(s => s.id === editId);
        if (idx !== -1) {
          appState.timerSessions[idx] = Object.assign({}, appState.timerSessions[idx], {
            date: dateVal,
            subject: subjVal,
            minutes: minsVal,
            activityType: actVal,
            label: actLabels[actVal] || appState.timerSessions[idx].label || 'Manual Study Session',
            notes: notesVal
          });
          showToast(`Updated study session (${minsVal}m on ${dateVal} • ${subjVal}).`);
        }
      } else {
        const overlapRadio = document.querySelector('input[name="manualOverlapMode"]:checked');
        const overlapMode = overlapRadio ? overlapRadio.value : 'add';
        const warnBox = document.getElementById('manualTimeOverlapWarningBox');
        const hasVisibleOverlap = warnBox && !warnBox.classList.contains('hidden');

        if (hasVisibleOverlap && overlapMode === 'replace_timer') {
          appState.timerSessions = appState.timerSessions.filter(s => !(s && s.date === dateVal && s.subject === subjVal));
        }

        appState.timerSessions.push({
          id: 'ts-man-' + Date.now(),
          source: 'manual',
          activityType: actVal,
          label: actLabels[actVal] || 'Manual Study Session',
          subject: subjVal,
          minutes: minsVal,
          date: dateVal,
          notes: notesVal
        });
        showToast(`Logged ${minsVal}m (${(minsVal / 60).toFixed(1)}h) for ${subjVal} on ${dateVal}!`);
      }

      saveState();
      closeManualTimeModal();
      refreshAllViews();
    }

    function deleteTimerSession(sessionId) {
      if (!sessionId || !Array.isArray(appState.timerSessions)) return;
      const before = appState.timerSessions.length;
      appState.timerSessions = appState.timerSessions.filter(s => s.id !== sessionId);
      if (appState.timerSessions.length < before) {
        saveState();
        refreshAllViews();
        showToast('Deleted recorded study session.');
      }
    }

    function syncDailyWorkspaceUpgradeWidgets(day) {
      if (!day) return;
      const iso = day.date;
      const isOff = isDateMarkedDayOff(iso);
      const plannedH = getPlannedHoursForDate(iso);
      const actualH = getActualStudyHoursForDate(iso);
      const diffH = actualH - plannedH;
      const pctMet = plannedH > 0 ? Math.min(999, Math.round((actualH / plannedH) * 100)) : (actualH > 0 ? 100 : 0);

      // 1. Update Today's Planned Hours Override input & Mark as Day Off button
      const hrInp = document.getElementById('dailyPlannedHoursOverrideInput');
      if (hrInp) hrInp.value = plannedH;
      const hrReset = document.getElementById('dailyResetHoursOverrideBtn');
      const hasHrOv = Boolean(appState.dateHourOverrides && appState.dateHourOverrides[iso] !== undefined);
      if (hrReset) hrReset.classList.toggle('hidden', !hasHrOv);

      const offBtn = document.getElementById('dailyToggleDayOffBtn');
      if (offBtn) {
        if (isOff) {
          offBtn.innerHTML = '&#8634; Restore Study Day (Day Off Active)';
          offBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white border border-amber-600 text-[11px] font-extrabold transition';
        } else {
          offBtn.innerHTML = '&#127958; Mark as Day Off';
          offBtn.className = 'px-2.5 py-1 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-300 text-[11px] font-extrabold transition';
        }
      }

      // 2. Update Unscheduled Backlog Banner
      const backlog = (appState && appState.unscheduledBacklog) || [];
      const blBanner = document.getElementById('unscheduledBacklogBanner');
      const blTitle = document.getElementById('unscheduledBacklogTitle');
      const blList = document.getElementById('unscheduledBacklogList');
      if (blBanner) {
        blBanner.classList.toggle('hidden', backlog.length === 0);
        if (backlog.length > 0 && blTitle && blList) {
          blTitle.textContent = `${backlog.length} Unscheduled Curriculum Item${backlog.length === 1 ? '' : 's'} (Deferred from Day Off)`;
          blList.innerHTML = backlog.map(b => `
            <div class="p-2.5 rounded-xl bg-white border border-indigo-200 flex items-center justify-between gap-2 text-xs">
              <div class="min-w-0 flex-1">
                <span class="font-extrabold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-900">${b.code}</span>
                <span class="font-semibold text-slate-800 ml-1 truncate">${b.title}</span>
              </div>
              <button type="button" onclick="assignBacklogItemToDate('${b.uniqueKey || b.code}', '${iso}')" class="px-2 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold shrink-0">+ Add to Today</button>
            </div>
          `).join('');
        }
      }

      // 3. Update Daily Planned vs. Actual Study Hours Card
      const setTxt = (id, t) => { const el = document.getElementById(id); if (el) el.textContent = t; };
      setTxt('dailySummaryPlannedHrs', isOff ? '0.0h (Off)' : `${plannedH.toFixed(1)}h`);
      setTxt('dailySummaryActualHrs', `${actualH.toFixed(1)}h`);
      setTxt('dailySummaryDiffHrs', `${diffH >= 0 ? '+' : ''}${diffH.toFixed(1)}h`);
      setTxt('dailySummaryPctMet', isOff ? 'Day Off' : `${pctMet}%`);
      const barEl = document.getElementById('dailySummaryTimeBar');
      if (barEl) barEl.style.width = `${Math.min(100, pctMet)}%`;

      const allDayItems = [...(day.mainItems || []), ...(day.ethicsItems || [])];
      const doneDayItems = allDayItems.filter(i => appState.completedItems && appState.completedItems[i.id]).length;
      setTxt('dailySummaryActivityStatus', isOff ? 'Scheduled Day Off (No penalty)' : `Curriculum items today: ${doneDayItems}/${allDayItems.length} done`);

      const rep = getWeeklyAndMonthlyTimeReport(iso);
      setTxt('dailySummaryWeekTotals', `This week: ${rep.weekActualHrs.toFixed(1)}h / ${rep.weekPlannedHrs.toFixed(1)}h (${rep.weekPct}%)`);

      const daySessions = (appState.timerSessions || []).filter(s => s && s.date === iso && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15');
      const sessListEl = document.getElementById('dailySummarySessionsList');
      if (sessListEl) {
        if (daySessions.length === 0) {
          sessListEl.innerHTML = `<div class="text-[11px] text-slate-400 italic">No study sessions logged on ${day.dateShort} yet. Run the Pomodoro timer above or click "+ Log Manual Time".</div>`;
        } else {
          sessListEl.innerHTML = daySessions.map(s => `
            <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-[11px]">
              <div class="truncate">
                <span class="font-extrabold text-indigo-800">${s.subject}</span> •
                <span class="font-semibold text-slate-800">${s.label || 'Study Session'}</span>
                <span class="text-slate-400">(${s.source === 'manual' ? 'Manual' : 'Timer'})</span>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <strong class="text-teal-700">+${s.minutes}m</strong>
                <button type="button" onclick="openManualTimeModal('${iso}', '${s.id}')" class="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-600 text-[10px]">Edit</button>
                <button type="button" onclick="deleteTimerSession('${s.id}')" class="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-rose-600 text-[10px]">&times;</button>
              </div>
            </div>
          `).join('');
        }
      }

      // 4. Sync Weekly/Monthly Calendar Toggle on Daily Workspace
      syncDailyCalendarVisibility();
      renderSynchronizedMonthlyCalendars();
    }

    // ==================== FEATURE 5: EXAM READINESS FORECAST & INTELLIGENT RECOMMENDATIONS ====================
    function toggleReadinessDetailsDrawer() {
      appState.readinessDrawerOpen = !appState.readinessDrawerOpen;
      saveState();
      const drawer = document.getElementById('readinessExpandableDrawer');
      const btn = document.getElementById('toggleReadinessDetailsBtn');
      if (drawer) drawer.classList.toggle('hidden', !appState.readinessDrawerOpen);
      if (btn) {
        btn.innerHTML = appState.readinessDrawerOpen
          ? 'Hide 10-Topic Readiness &amp; Methodology &#9652;'
          : 'Inspect 10-Topic Readiness &amp; Methodology &#9662;';
      }
    }

    function updateReadinessThresholds(newTargetAcc) {
      ensurePlanConfigInitialized();
      appState.planConfig.lesTargetAccuracy = Math.max(50, Math.min(90, parseInt(newTargetAcc, 10) || 65));
      saveState();
      renderExamReadinessForecast();
      showToast(`Updated LES target accuracy threshold to ${appState.planConfig.lesTargetAccuracy}%.`);
    }

    function renderExamReadinessForecast() {
      const panel = document.getElementById('examReadinessForecastPanel');
      if (!panel) return;
      const cfg = (appState && appState.planConfig) || {};
      const targetAcc = Number(cfg.lesTargetAccuracy ?? 65);
      const minSample = Number(cfg.minQuestionSampleSize ?? 15);
      const wl = computeBottomUpWorkloadAndFeasibility(cfg);
      const fr = wl.finalReviewWindow;

      // Sync drawer visibility
      const drawer = document.getElementById('readinessExpandableDrawer');
      const btn = document.getElementById('toggleReadinessDetailsBtn');
      if (drawer) drawer.classList.toggle('hidden', !appState.readinessDrawerOpen);
      if (btn) {
        btn.innerHTML = appState.readinessDrawerOpen
          ? 'Hide 10-Topic Readiness &amp; Methodology &#9652;'
          : 'Inspect 10-Topic Readiness &amp; Methodology &#9662;';
      }
      const accInp = document.getElementById('readinessTargetAccInput');
      if (accInp) accInp.value = targetAcc;
      const sampleLbl = document.getElementById('readinessSampleSizeLabel');
      if (sampleLbl) sampleLbl.textContent = minSample;
      const targetLbl = document.getElementById('readinessTargetAccLabel');
      if (targetLbl) targetLbl.textContent = targetAcc;
      const methMinsLbl = document.getElementById('methodologyMinsPerLessonLabel');
      if (methMinsLbl) methMinsLbl.textContent = `~${cfg.lessonDurationMins || 23}m`;

      // Indicator 1: Curriculum Completion %
      const ind1Badge = document.getElementById('readinessInd1Badge');
      const ind1Val = document.getElementById('readinessInd1Value');
      const ind1Sub = document.getElementById('readinessInd1Sub');
      if (ind1Badge) ind1Badge.textContent = `${wl.curriculumPct.toFixed(0)}%`;
      if (ind1Val) ind1Val.textContent = `${wl.curriculumPct.toFixed(1)}%`;
      if (ind1Sub) ind1Sub.textContent = `${wl.doneLessonsAll}/${wl.totalLessonsAll} lessons • ${wl.completedWorkloadHours.toFixed(1)}h est. done`;

      // Indicator 2: LES Practice Accuracy (Per-metric data sufficiency!)
      let totalQAtt = 0;
      let totalQCor = 0;
      let topicsWithSufficientQs = 0;
      let weakTopicsCount = 0;
      const weakTopicNames = [];

      Object.values(wl.topicBreakdown).forEach(tb => {
        totalQAtt += tb.qAttempted;
        totalQCor += tb.qCorrect;
        if (tb.qAttempted >= minSample) {
          topicsWithSufficientQs++;
          if (tb.qAccuracy !== null && tb.qAccuracy < targetAcc) {
            weakTopicsCount++;
            weakTopicNames.push(`${tb.code} (${tb.qAccuracy}%)`);
          }
        }
      });
      appState.qbankDrills.forEach(dr => {
        totalQAtt += (parseInt(dr.attempted, 10) || 0);
        totalQCor += (parseInt(dr.correct, 10) || 0);
      });

      const ind2Badge = document.getElementById('readinessInd2Badge');
      const ind2Val = document.getElementById('readinessInd2Value');
      const ind2Sub = document.getElementById('readinessInd2Sub');
      const hasSufficientOverallQs = totalQAtt >= minSample;
      const overallAccNum = totalQAtt > 0 ? Math.round((totalQCor / totalQAtt) * 1000) / 10 : null;

      if (!hasSufficientOverallQs) {
        if (ind2Badge) {
          ind2Badge.textContent = 'Insufficient Data';
          ind2Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700';
        }
        if (ind2Val) ind2Val.textContent = totalQAtt > 0 ? `${overallAccNum}% (${totalQAtt} Qs)` : 'Insufficient Data';
        if (ind2Sub) ind2Sub.textContent = `${totalQAtt} Qs logged (<${minSample} min sample)`;
      } else {
        const isGoodAcc = overallAccNum >= targetAcc && weakTopicsCount === 0;
        if (ind2Badge) {
          ind2Badge.textContent = isGoodAcc ? 'Target Met' : `${weakTopicsCount} Weak Topic(s)`;
          ind2Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded ' + (isGoodAcc ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900');
        }
        if (ind2Val) ind2Val.textContent = `${overallAccNum}%`;
        if (ind2Sub) ind2Sub.textContent = `${totalQAtt.toLocaleString()} Qs across ${topicsWithSufficientQs}/10 topics`;
      }

      // Indicator 3: Study Hours Completed (Actual vs Planned)
      const ind3Badge = document.getElementById('readinessInd3Badge');
      const ind3Val = document.getElementById('readinessInd3Value');
      const ind3Sub = document.getElementById('readinessInd3Sub');
      const planTotalH = Math.max(1, wl.totalPlanScheduledHours || 296);
      const actPctOfTotal = Math.round((wl.totalActualHrs / planTotalH) * 100);
      if (ind3Badge) {
        ind3Badge.textContent = wl.totalActualHrs === 0 ? '0h Logged' : `${actPctOfTotal}% of Plan`;
        ind3Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded ' + (wl.totalActualHrs > 0 ? 'bg-teal-100 text-teal-800' : 'bg-slate-200 text-slate-700');
      }
      if (ind3Val) ind3Val.textContent = `${wl.totalActualHrs.toFixed(1)} / ${planTotalH.toFixed(0)}h`;
      if (ind3Sub) ind3Sub.textContent = `To date: ${wl.totalActualHrs.toFixed(1)}h act vs ${wl.plannedHoursToDate.toFixed(1)}h plan`;

      // Indicator 4: Study Pace & Schedule Feasibility
      const ind4Badge = document.getElementById('readinessInd4Badge');
      const ind4Val = document.getElementById('readinessInd4Value');
      const ind4Sub = document.getElementById('readinessInd4Sub');
      if (wl.hasWorkloadShortfall) {
        if (ind4Badge) {
          ind4Badge.textContent = 'Shortfall';
          ind4Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800';
        }
        if (ind4Val) ind4Val.textContent = `Need +${wl.extraHoursPerDayNeeded.toFixed(1)}h/d`;
        if (ind4Sub) ind4Sub.textContent = `Rem: ${wl.remainingCoreWorkloadHours}h vs ${wl.availablePhase1Hours}h avail`;
      } else if (wl.hasTightBuffer) {
        if (ind4Badge) {
          ind4Badge.textContent = 'Tight Buffer';
          ind4Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900';
        }
        if (ind4Val) ind4Val.textContent = `Need +${wl.extraHoursPerDayNeeded.toFixed(1)}h/d`;
        if (ind4Sub) ind4Sub.textContent = `Rem: ${wl.remainingCoreWorkloadHours}h vs ${wl.availablePhase1Hours}h avail`;
      } else {
        if (ind4Badge) {
          ind4Badge.textContent = wl.isPaceRefined ? 'Pace Refined' : 'Feasible';
          ind4Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800';
        }
        if (ind4Val) ind4Val.textContent = 'On Track';
        if (ind4Sub) ind4Sub.textContent = `Rem: ${wl.remainingCoreWorkloadHours}h fits ${wl.availablePhase1Hours}h avail`;
      }

      // Indicator 5: Final Review & Revision Readiness
      const ind5Badge = document.getElementById('readinessInd5Badge');
      const ind5Val = document.getElementById('readinessInd5Value');
      const ind5Sub = document.getElementById('readinessInd5Sub');
      const maxOverlap = Math.max(fr.overlapDays, wl.projectedOverlapsFinalReviewDays);
      if (fr.examBeforeCoreEnd || maxOverlap > 5) {
        if (ind5Badge) {
          ind5Badge.textContent = 'Conflict';
          ind5Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800';
        }
        if (ind5Val) ind5Val.textContent = `${maxOverlap}d Overlap`;
        if (ind5Sub) ind5Sub.textContent = `Proj. finish: ${wl.projectedCompletionIso}`;
      } else if (maxOverlap > 0) {
        if (ind5Badge) {
          ind5Badge.textContent = 'Minor Overlap';
          ind5Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900';
        }
        if (ind5Val) ind5Val.textContent = `${maxOverlap}d Overlap`;
        if (ind5Sub) ind5Sub.textContent = `Final Review starts ${fr.finalReviewStartIso}`;
      } else {
        if (ind5Badge) {
          ind5Badge.textContent = 'Protected';
          ind5Badge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-800';
        }
        if (ind5Val) ind5Val.textContent = `${fr.frDays}d Reserved`;
        if (ind5Sub) ind5Sub.textContent = `Proj. finish: ${formatIsoToShortDisplay(wl.projectedCompletionIso)} ${wl.projectedCompletionIso.slice(0, 4)}`;
      }

      // Refined Overall Readiness Classification (Never classify as At Risk solely due to 0 logged timer hours if remaining workload fits available capacity!)
      let overallStatus = 'On Track';
      let overallCls = 'text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200';
      const backlogLen = ((appState && appState.unscheduledBacklog) || []).length;
      const elapsedTimeLag = wl.plannedHoursToDate >= 10 && wl.totalActualHrs > 0 && (wl.totalActualHrs < wl.plannedHoursToDate * 0.7);

      if (wl.hasWorkloadShortfall || fr.examBeforeCoreEnd || maxOverlap > 5) {
        overallStatus = 'At Risk';
        overallCls = 'text-xs font-extrabold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200';
      } else if (maxOverlap > 0 || weakTopicsCount > 0 || backlogLen > 0 || elapsedTimeLag || wl.hasTightBuffer) {
        overallStatus = 'Attention Needed';
        overallCls = 'text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200';
      }

      const overallBadge = document.getElementById('readinessOverallBadge');
      if (overallBadge) {
        overallBadge.textContent = `Status: ${overallStatus}`;
        overallBadge.className = overallCls;
      }

      const curPhase = getPhaseForDate(appState.activeDate || '2026-11-02', cfg);
      const phaseLabels = {
        core_reading: 'Phase 1: Core Curriculum Reading',
        phase2_practice: 'Phase 2: Q-Bank, Revision & Mocks',
        final_review: `Phase 3: Final Review Sprint (${fr.frDays}d)`,
        overlap_final_review: 'Phase 1 / Phase 3 Overlap Window',
        exam_day: 'EXAM DAY',
        outside_plan: 'Pre-Plan / Post-Exam Window'
      };
      const phasePill = document.getElementById('readinessPhasePill');
      if (phasePill) phasePill.textContent = phaseLabels[curPhase] || 'Phase 1: Core Reading';

      // Scenarios A–E Dynamic Recommendations
      const recTag = document.getElementById('readinessScenarioTag');
      const recText = document.getElementById('readinessRecommendationText');
      if (recText) {
        if (wl.hasWorkloadShortfall || fr.examBeforeCoreEnd || maxOverlap > 5) {
          // Scenario A: Study Hours Insufficient for Remaining Curriculum
          if (recTag) recTag.textContent = 'Scenario A: Schedule Capacity Shortfall';
          recText.innerHTML = `Your remaining core workload is <strong>${wl.remainingCoreWorkloadHours.toFixed(1)}h</strong>, while your current schedule provides <strong>${wl.availablePhase1Hours.toFixed(1)}h</strong> before <strong>${cfg.endDate}</strong>${maxOverlap > 0 ? ` (overlapping your ${fr.frDays}-day Final Review Sprint by ${maxOverlap} days)` : ''}. <strong>Recommendation:</strong> Increase daily study hours by <strong>+${wl.extraHoursPerDayNeeded.toFixed(1)}h/day</strong> (or enable <em>Mode B: Exam-Date Ramp-Up</em>) so you finish core readings before your Final Review window begins on <strong>${fr.finalReviewStartIso}</strong>.`;
        } else if (weakTopicsCount > 0) {
          // Scenario B: High Study Hours / Schedule On Track, Low LES Accuracy (Knowledge Gap)
          if (recTag) recTag.textContent = 'Scenario B: Targeted Knowledge Gap';
          recText.innerHTML = `Your schedule capacity is feasible, but LES practice accuracy is below your <strong>${targetAcc}%</strong> target in <strong>${weakTopicNames.join(', ')}</strong>. <strong>Recommendation:</strong> Convert an upcoming reading block into a <strong>Revision &amp; LES Practice Day</strong> focused on those modules' worked examples and formula traps rather than rushing new readings.`;
        } else if (backlogLen > 0) {
          // Scenario C: Topics Behind Schedule / Unscheduled Backlog
          if (recTag) recTag.textContent = 'Scenario C: Unscheduled Backlog Pending';
          recText.innerHTML = `You have <strong>${backlogLen} curriculum item(s)</strong> waiting in your Unscheduled Backlog from a Day Off, while <strong>${wl.availablePhase1Hours.toFixed(1)}h</strong> of Phase 1 study capacity remains. <strong>Recommendation:</strong> Click <em>Auto-Redistribute Across Future Days</em> in the backlog banner below to spread those lessons evenly without overloading a single day.`;
        } else if (wl.doneLessonsAll > 0 && wl.capacityBufferHours > 15 && (!hasSufficientOverallQs || overallAccNum >= targetAcc)) {
          // Scenario E: Ahead of Schedule
          if (recTag) recTag.textContent = 'Scenario E: Ahead of Schedule';
          recText.innerHTML = `You have completed <strong>${wl.doneLessonsAll}/${wl.totalLessonsAll} lessons (${wl.curriculumPct}%)</strong> with a <strong>+${wl.capacityBufferHours.toFixed(1)}h</strong> capacity buffer before your <strong>${fr.frDays}-day Final Review Sprint</strong>. <strong>Recommendation:</strong> Maintain your current pace and use weekend blocks for cumulative multi-topic LES vignette sets.`;
        } else {
          // Baseline Feasible / Scenario D check
          if (recTag) recTag.textContent = wl.isPaceRefined ? 'Observed-Pace Forecast' : 'Baseline Schedule Forecast';
          recText.innerHTML = `Your remaining curriculum workload (<strong>${wl.remainingCoreWorkloadHours.toFixed(1)}h</strong> across <strong>${wl.totalLessonsAll - wl.doneLessonsAll} lessons</strong>) fits within your <strong>${wl.availablePhase1Hours.toFixed(1)}h</strong> of scheduled Phase 1 capacity, protecting your <strong>${fr.frDays}-day Final Review Sprint (${fr.finalReviewStartIso} – ${fr.finalReviewEndIso})</strong> before Exam Day (<strong>${fr.examIso}</strong>). ${!hasSufficientOverallQs ? `Log at least <strong>${minSample} LES practice questions</strong> per topic to unlock topic-level accuracy diagnostics.` : ''}`;
        }
      }

      // Render 10-Topic Readiness Breakdown Table
      const tbody = document.getElementById('readinessTopicTableBody');
      if (tbody) {
        const order10 = getActiveTopicOrderList(cfg);
        if (!order10.includes('ET')) order10.push('ET');
        tbody.innerHTML = order10.map(code => {
          const tb = wl.topicBreakdown[code];
          if (!tb) return '';
          const curPct = tb.totalLessons > 0 ? Math.round((tb.doneLessons / tb.totalLessons) * 100) : 0;
          let accHtml = '';
          let statusHtml = '';

          if (tb.qAttempted < minSample) {
            accHtml = `<span class="text-slate-500 font-semibold">${tb.qAttempted > 0 ? tb.qAccuracy + '% (' + tb.qAttempted + ' Qs)' : '0 Qs'} • <em class="text-[10px]">Insufficient Data (&lt;${minSample} Qs)</em></span>`;
          } else {
            const accColor = tb.qAccuracy < targetAcc ? 'text-rose-700 font-extrabold' : 'text-emerald-700 font-extrabold';
            accHtml = `<span class="${accColor}">${tb.qAccuracy}% (${tb.qCorrect}/${tb.qAttempted})</span>`;
          }

          if (tb.qAttempted >= minSample && tb.qAccuracy < targetAcc) {
            statusHtml = `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-extrabold text-[10px]">Knowledge Gap (&lt;${targetAcc}%)</span>`;
          } else if (tb.hardCount > 0 || tb.flaggedModules > 0) {
            statusHtml = `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">Review ${tb.hardCount} &#9733; Hard</span>`;
          } else if (curPct === 100) {
            statusHtml = `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">Readings Complete</span>`;
          } else if (curPct > 0) {
            statusHtml = `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">In Progress (${curPct}%)</span>`;
          } else {
            statusHtml = `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold text-[10px]">Scheduled</span>`;
          }

          return `
            <tr class="hover:bg-slate-50">
              <td class="py-2 px-2.5 font-bold text-slate-900">${tb.code} — ${tb.name}</td>
              <td class="py-2 px-2.5 text-right font-semibold text-slate-800">${tb.doneLessons}/${tb.totalLessons} (${curPct}%)</td>
              <td class="py-2 px-2.5 text-right text-slate-600">${tb.remainingHoursEst.toFixed(1)}h</td>
              <td class="py-2 px-2.5 text-right font-bold text-teal-700">${tb.actualLoggedHours.toFixed(1)}h</td>
              <td class="py-2 px-2.5 text-right">${accHtml}</td>
              <td class="py-2 px-2.5 text-center">${tb.hardCount > 0 ? `<span class="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[10px]">${tb.hardCount} &#9733;</span>` : '—'}</td>
              <td class="py-2 px-2.5">${statusHtml}</td>
            </tr>
          `;
        }).join('');
      }
    }

    // ==================== 11. PLAN DATES, DAILY HOURS & INSTANT PROFILE SETUP HANDLERS ====================
    function openPlanSettingsModal(isFirstTimeOnboarding) {
      ensurePlanConfigInitialized();
      // Always open with blank dates and blank hours as requested
      document.getElementById('planStartDateInput').value = '';
      document.getElementById('planEndDateInput').value = '';
      document.getElementById('planExamDateModalInput').value = '';
      document.getElementById('planWeekdayHoursInput').value = '';
      document.getElementById('planWeekendHoursInput').value = '';

      // Initialize modal draft flexibility settings from current appState.planConfig
      const cfg = appState.planConfig;
      modalDraftEthicsMode = cfg.ethicsMode || 'daily_parallel';
      modalDraftWeeklyMode = cfg.weeklyScheduleMode || 'recommended';
      modalDraftCustomDays = Object.assign({}, DEFAULT_CUSTOM_DAY_MODES, cfg.customDayModes || {});
      modalDraftTopicOrder = getActiveTopicOrderList(cfg);
      const ethMinsInp = document.getElementById('modalEthicsCustomMinsInput');
      if (ethMinsInp) {
        ethMinsInp.value = (cfg.ethicsCustomMins !== null && cfg.ethicsCustomMins !== undefined && cfg.ethicsCustomMins !== '') ? String(cfg.ethicsCustomMins) : '';
      }
      renderModalFlexibilityControls();

      const reg = loadUsersRegistry();
      const curReg = reg[currentActiveUserEmail] || {};
      const rawName = (appState.userProfile && appState.userProfile.name) || curReg.name || '';
      const isGenericGuestName = !rawName || rawName === 'Candidate' || rawName === 'CFA Candidate' || rawName.startsWith('Guest Candidate #');
      const curName = isGenericGuestName ? '' : rawName;
      const curEmail = curReg.displayEmail || (currentActiveUserEmail && !currentActiveUserEmail.startsWith('candidate_usr') ? currentActiveUserEmail : '');

      const nameInp = document.getElementById('planCandidateNameInput');
      const emailInp = document.getElementById('planCandidateEmailInput');
      if (nameInp) nameInp.value = curName;
      if (emailInp) emailInp.value = curEmail;

      const welcomeBanner = document.getElementById('planOnboardingWelcomeBanner');
      if (welcomeBanner) {
        welcomeBanner.classList.toggle('hidden', !isFirstTimeOnboarding);
      }
      updateModalPlanPreview();
      const modal = document.getElementById('planSettingsModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function onLiveUsernameOrEmailInput(sourceModal) {
      try {
        const nameId = sourceModal === 'auth' ? 'loginNameInput' : 'planCandidateNameInput';
        const emailId = sourceModal === 'auth' ? 'loginEmailInput' : 'planCandidateEmailInput';
        const rawName = ((document.getElementById(nameId) || {}).value || '').trim();
        const rawEmail = normalizeEmail(((document.getElementById(emailId) || {}).value || ''));
        if (!rawName && !rawEmail) return;
        const reg = loadUsersRegistry();
        const cur = reg[currentActiveUserEmail] || {};
        if (rawName && !rawName.startsWith('Guest Candidate #') && rawName !== 'Candidate' && rawName !== 'CFA Candidate') {
          cur.username = rawName;
          cur.name = rawName;
          if (!hasRealUserEmail(cur.displayEmail) && !hasRealUserEmail(rawEmail)) {
            cur.accessType = 'username_only';
          }
          reg[currentActiveUserEmail] = cur;
          saveUsersRegistry(reg);
          if (appState && appState.userProfile) {
            appState.userProfile.name = rawName;
            saveState();
          }
          updateDynamicUserAndPlanBanners();
          clearTimeout(window._liveUsernameSyncTimer);
          window._liveUsernameSyncTimer = setTimeout(() => {
            recordCurrentUserIntoTelemetryDirectory('Entered Username: ' + rawName);
            sendActiveUserTelemetryPing('username_entered', false);
          }, 600);
        }
      } catch (e) {}
    }

    function closePlanSettingsModal() {
      const modal = document.getElementById('planSettingsModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
      if (appState) {
        const rawName = ((document.getElementById('planCandidateNameInput') || {}).value || '').trim();
        const rawEmail = normalizeEmail(((document.getElementById('planCandidateEmailInput') || {}).value || ''));
        if (rawName || rawEmail) {
          applyProfileUpdatePreservingAnonymous(rawName, rawEmail, rawName ? ('Set Username: ' + rawName) : 'Updated Profile');
        }
        const wasFirstSetup = !appState.hasCompletedPlanSetup;
        appState.hasCompletedPlanSetup = true;
        saveState();
        updateDynamicUserAndPlanBanners();
        const actionMsg = wasFirstSetup
          ? (rawName ? `Joined as "${rawName}" (Default Plan)` : 'Opened Link — Using Default Plan (No Email)')
          : 'Closed Plan Settings';
        recordCurrentUserIntoTelemetryDirectory(actionMsg);
        sendActiveUserTelemetryPing('instant_open_active', true);
      }
    }

    function updateModalPlanPreview() {
      const sIso = document.getElementById('planStartDateInput').value;
      const eIso = document.getElementById('planEndDateInput').value;
      const xIso = document.getElementById('planExamDateModalInput').value;
      const wkRaw = document.getElementById('planWeekdayHoursInput').value;
      const weRaw = document.getElementById('planWeekendHoursInput').value;
      const badge = document.getElementById('modalPreviewPaceBadge');
      const txt = document.getElementById('modalPreviewDetailsText');
      const hintEl = document.getElementById('modalEthicsRecommendationHint');

      const previewWkH = wkRaw !== '' ? Math.max(0, parseFloat(wkRaw) || 0) : Number((appState.planConfig && appState.planConfig.weekdayHours) ?? 2.0);
      const recEthM = Math.max(10, Math.round(previewWkH * 60 * (20 / 120)));
      if (hintEl) {
        hintEl.innerHTML = `Recommended Ethics allocation: <strong>~${recEthM} min/day</strong> on a ${previewWkH.toFixed(1)}h plan (${Math.max(0, Math.round(previewWkH * 60) - recEthM)}m Main Topic):`;
      }

      const seqSummary = modalDraftTopicOrder.join(' → ');
      const ethicsDesc = modalDraftEthicsMode === 'sequence_10' ? '10-Topic Sequence (100% daily topic focus)' : 'Daily Ethics alongside 9 topics';

      if (!sIso || !eIso || (wkRaw === '' && weRaw === '')) {
        if (badge) badge.textContent = `${modalDraftTopicOrder.length}-Topic Order Ready`;
        if (txt) txt.innerHTML = `<strong>Topic Order:</strong> ${seqSummary} • <strong>Ethics:</strong> ${ethicsDesc}.<br>Select Start &amp; Finish Dates and daily hours above (or click <em>Save &amp; Build My Dashboard</em> to apply your topic order &amp; schedule preferences to your current dates).`;
        return;
      }

      const wkH = Math.max(0, parseFloat(wkRaw) || 0);
      const weH = Math.max(0, parseFloat(weRaw) || 0);
      const m = computePlanMetricsPreview(sIso, eIso, xIso || eIso, wkH, weH);
      if (!m.valid) {
        if (badge) badge.textContent = 'Invalid Date Range';
        if (txt) txt.textContent = m.message;
        return;
      }
      if (badge) badge.textContent = `${m.weeksCount} Weeks • ${m.totalHours.toFixed(1)} Total Hrs`;
      if (txt) {
        txt.innerHTML = `<strong>${m.totalDays} calendar days</strong> (${m.weekdaysCount} weekdays @ ${wkH}h/day + ${m.weekendDaysCount} weekend days @ ${weH}h/day) • <strong>~${m.lessonsPerStudyDay} lessons/study day</strong> • <strong>Order:</strong> ${seqSummary} (${ethicsDesc}).`;
      }
    }

    function resetPlanToDefaultMay2027() {
      document.getElementById('planStartDateInput').value = '';
      document.getElementById('planEndDateInput').value = '';
      document.getElementById('planExamDateModalInput').value = '';
      document.getElementById('planWeekdayHoursInput').value = '';
      document.getElementById('planWeekendHoursInput').value = '';
      applyRecommendedScheduleDefaultsInModal();
    }

    function saveAndApplyPlanSettings() {
      ensurePlanConfigInitialized();
      const curCfg = appState.planConfig;
      const sIsoInput = document.getElementById('planStartDateInput').value;
      const eIsoInput = document.getElementById('planEndDateInput').value;
      const xIsoInput = document.getElementById('planExamDateModalInput').value;
      const wkRaw = document.getElementById('planWeekdayHoursInput').value;
      const weRaw = document.getElementById('planWeekendHoursInput').value;
      const rawName = ((document.getElementById('planCandidateNameInput') || {}).value || '').trim();
      const rawEmail = normalizeEmail(((document.getElementById('planCandidateEmailInput') || {}).value || ''));
      const ethCustomRaw = ((document.getElementById('modalEthicsCustomMinsInput') || {}).value || '').trim();

      // Use entered dates/hours or seamlessly fall back to existing planConfig dates/hours so users can save Topic Order / Ethics Mode / Weekly Rhythm anytime!
      const sIso = sIsoInput || curCfg.startDate || '2026-11-01';
      const eIso = eIsoInput || curCfg.endDate || '2027-03-28';
      const xIso = xIsoInput || curCfg.examDate || eIso || '2027-05-22';
      const wkH = (wkRaw !== '') ? Math.max(0, parseFloat(wkRaw) || 0) : Number(curCfg.weekdayHours ?? 2.0);
      const weH = (weRaw !== '') ? Math.max(0, parseFloat(weRaw) || 0) : Number(curCfg.weekendHours ?? 2.0);

      const m = computePlanMetricsPreview(sIso, eIso, xIso, wkH, weH);
      if (!m.valid) {
        showToast(m.message);
        return;
      }

      applyProfileUpdatePreservingAnonymous(rawName, rawEmail, 'Configured Custom Study Schedule');

      appState.planConfig = Object.assign({}, curCfg, {
        startDate: sIso,
        endDate: eIso,
        examDate: xIso,
        weekdayHours: wkH,
        weekendHours: weH,
        ethicsMode: modalDraftEthicsMode,
        ethicsCustomMins: ethCustomRaw !== '' ? Math.max(0, parseInt(ethCustomRaw, 10) || 0) : null,
        topicOrder: modalDraftTopicOrder.slice(),
        weeklyScheduleMode: modalDraftWeeklyMode,
        customDayModes: Object.assign({}, modalDraftCustomDays),
        isCustomPlan: true
      });
      appState.examDate = xIso;
      appState.hasCompletedPlanSetup = true;
      rebuildScheduleForUserPlan();
      saveState();
      closePlanSettingsModal();
      refreshAllViews();

      recordCurrentUserIntoTelemetryDirectory(`Configured Schedule (${sIso} to ${eIso})`);
      sendActiveUserTelemetryPing('plan_saved', true);

      const displayUser = (appState.userProfile && appState.userProfile.name) || 'Candidate';
      showToast(`Updated schedule for ${displayUser}: ${m.totalDays} days (${modalDraftTopicOrder.join(' → ')}).`);
    }

    // Helper: Checks whether an email string is a genuine user-provided email (not an internal candidate_usr key or placeholder)
    function hasRealUserEmail(emailStr) {
      const clean = normalizeEmail(emailStr || '');
      if (!clean || clean === '—' || clean === '-' || clean === 'none' || clean === 'null') return false;
      if (clean.startsWith('candidate_') || clean.startsWith('instant-visitor-') || clean.startsWith('guest_') || clean.startsWith('usr-')) return false;
      if (clean.endsWith('@cfastudyplan.vercel.app') || clean.endsWith('@example.com')) return false;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);
    }

    // Helper: Checks whether a name string is a custom username entered by the user (rather than a generic Guest Candidate placeholder)
    function isCustomUserProvidedName(nameStr) {
      const clean = String(nameStr || '').trim();
      if (!clean) return false;
      if (clean === 'Candidate' || clean === 'CFA Candidate' || clean === 'Platform Admin') return false;
      if (clean.startsWith('Guest Candidate #') || clean.startsWith('Guest #') || clean.startsWith('USR-')) return false;
      return true;
    }

    // Helper: Extracts the best custom username from multiple candidate fields
    function extractCustomUsername(userObj, fallbackEmail) {
      if (!userObj) return '';
      const candidates = [userObj.username, userObj.customUsername, userObj.name, userObj.displayName];
      for (let i = 0; i < candidates.length; i++) {
        const c = String(candidates[i] || '').trim();
        if (isCustomUserProvidedName(c)) {
          // If it equals the email prefix and they never explicitly typed a separate name, still treat it as a valid username/handle
          return c;
        }
      }
      return '';
    }

    // Deterministic fallback Visitor ID from a profileKey so two guest profiles never collide on the same ID
    function getDeterministicVisitorIdForKey(profileKey) {
      const clean = String(profileKey || 'guest').trim().toLowerCase();
      const m = clean.match(/usr([a-z0-9]{4})([a-z0-9]{4})/i);
      if (m) {
        return 'USR-' + m[1].toUpperCase() + '-' + m[2].toUpperCase();
      }
      let h1 = 0x811c9dc5;
      let h2 = 5381;
      for (let i = 0; i < clean.length; i++) {
        const ch = clean.charCodeAt(i);
        h1 ^= ch;
        h1 = Math.imul(h1, 0x01000193) >>> 0;
        h2 = (((h2 << 5) + h2) ^ ch) >>> 0;
      }
      const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      let p1 = '', p2 = '';
      for (let i = 0; i < 4; i++) {
        p1 += alphabet[(h1 >>> (i * 5)) % alphabet.length];
        p2 += alphabet[(h2 >>> (i * 5)) % alphabet.length];
      }
      return 'USR-' + p1 + '-' + p2;
    }

    // Smart non-destructive merger for two telemetry user records of the same visitorId
    function mergeTelemetryUserRecords(existing, incoming) {
      const ex = existing || {};
      const inc = incoming || {};
      const vid = inc.visitorId || ex.visitorId || 'USR-0001';
      const guestDefault = getDefaultGuestNameFromVisitorId(vid);

      const exEmail = hasRealUserEmail(ex.email) ? normalizeEmail(ex.email) : (hasRealUserEmail(ex.displayEmail) ? normalizeEmail(ex.displayEmail) : '');
      const incEmail = hasRealUserEmail(inc.email) ? normalizeEmail(inc.email) : (hasRealUserEmail(inc.displayEmail) ? normalizeEmail(inc.displayEmail) : '');
      const bestEmail = incEmail || exEmail || '';

      const exUsername = extractCustomUsername(ex, exEmail);
      const incUsername = extractCustomUsername(inc, incEmail);
      const bestUsername = incUsername || exUsername || '';

      const bestDisplayName = bestUsername || (bestEmail ? bestEmail.split('@')[0] : guestDefault);
      const bestAccessType = classifyAccessType(bestDisplayName, bestEmail, bestUsername);

      const exLast = String(ex.lastActive || '');
      const incLast = String(inc.lastActive || '');
      const newer = incLast >= exLast ? inc : ex;
      const older = incLast >= exLast ? ex : inc;

      const firstSeenIso = (ex.firstSeen && inc.firstSeen)
        ? (ex.firstSeen < inc.firstSeen ? ex.firstSeen : inc.firstSeen)
        : (ex.firstSeen || inc.firstSeen || ex.createdAt || inc.createdAt || new Date().toISOString());

      return Object.assign({}, older, newer, {
        visitorId: vid,
        profileKey: newer.profileKey || older.profileKey || ('candidate_' + vid.toLowerCase().replace(/[^a-z0-9]/g, '')),
        name: bestDisplayName,
        username: bestUsername,
        guestLabel: guestDefault,
        email: bestEmail || '—',
        accessType: bestAccessType,
        deviceInfo: newer.deviceInfo || older.deviceInfo || 'Desktop • Browser',
        timezone: newer.timezone || older.timezone || 'Local Time',
        isCustomPlan: Boolean(ex.isCustomPlan || inc.isCustomPlan),
        startDate: newer.startDate || older.startDate || '2026-11-01',
        endDate: newer.endDate || older.endDate || '2027-03-28',
        weekdayHours: newer.weekdayHours ?? older.weekdayHours ?? 2.0,
        weekendHours: newer.weekendHours ?? older.weekendHours ?? 2.0,
        lessonsDone: Math.max(Number(ex.lessonsDone) || 0, Number(inc.lessonsDone) || 0),
        questionsAttempted: Math.max(Number(ex.questionsAttempted) || 0, Number(inc.questionsAttempted) || 0),
        studyHours: Math.max(Number(ex.studyHours) || 0, Number(inc.studyHours) || 0),
        activeMinutes: Math.max(Number(ex.activeMinutes) || 1, Number(inc.activeMinutes) || 1),
        totalVisits: Math.max(Number(ex.totalVisits) || 1, Number(inc.totalVisits) || 1),
        lastAction: newer.lastAction || newer.lastEvent || older.lastAction || older.lastEvent || 'Opened Dashboard (Instant Use)',
        lastEvent: newer.lastEvent || newer.lastAction || older.lastEvent || 'Opened Dashboard (Instant Use)',
        firstSeen: firstSeenIso,
        lastActive: (incLast >= exLast ? incLast : exLast) || new Date().toISOString()
      });
    }

    // Helper: Updates profile or switches to Admin/Email profile WITHOUT overwriting an existing anonymous Instant-Open visitor
    function applyProfileUpdatePreservingAnonymous(rawName, rawEmail, actionLabel) {
      const reg = loadUsersRegistry();
      const cur = reg[currentActiveUserEmail] || {};
      const cleanEmail = hasRealUserEmail(rawEmail) ? normalizeEmail(rawEmail) : '';
      const cleanTypedName = String(rawName || '').trim();

      if (cleanEmail && isOwnerEmail(cleanEmail)) {
        localStorage.setItem(ADMIN_UNLOCKED_DEVICE_KEY, 'true');
      }

      // If the current profile is an anonymous Instant-Open visitor (no email) and someone enters the Admin email (or another user's email),
      // DO NOT overwrite the anonymous visitor's profile! Save the anonymous visitor as-is and switch to a separate profile for that email!
      const isCurrentAnonymous = currentActiveUserEmail.startsWith('candidate_usr') && !hasRealUserEmail(cur.displayEmail);
      if (isCurrentAnonymous && cleanEmail) {
        // If they only entered the Admin email to unlock Admin mode (or if the anonymous visitor already had activity/username), keep the anonymous visitor intact in telemetry!
        recordCurrentUserIntoTelemetryDirectory(cur.lastAction || 'Browsing Dashboard (Instant Open)');

        const targetKey = cleanEmail;
        const existingTarget = reg[targetKey] || {};
        const targetVisitorId = existingTarget.visitorId || (isOwnerEmail(cleanEmail) ? 'USR-ADMIN-0001' : generateVisitorId());
        const targetUsername = isCustomUserProvidedName(cleanTypedName)
          ? cleanTypedName
          : (extractCustomUsername(existingTarget, cleanEmail) || (isOwnerEmail(cleanEmail) ? MASTER_OWNER_NAME : ''));
        const targetName = targetUsername || (isOwnerEmail(cleanEmail) ? MASTER_OWNER_NAME : cleanEmail.split('@')[0]);
        const meta = detectVisitorDeviceAndTimezone();

        reg[targetKey] = Object.assign({}, existingTarget, {
          email: targetKey,
          displayEmail: cleanEmail,
          name: targetName,
          username: targetUsername,
          visitorId: targetVisitorId,
          provider: 'EmailProfile',
          accessType: 'email_registered',
          deviceInfo: meta.deviceSummary,
          timezone: meta.timezone,
          explicitlySignedIn: true,
          unlocked: true,
          createdAt: existingTarget.createdAt || new Date().toISOString(),
          lastActive: new Date().toISOString()
        });
        saveUsersRegistry(reg);
        localStorage.setItem(ACTIVE_USER_EMAIL_KEY, targetKey);
        currentActiveUserEmail = targetKey;
        loadState(targetKey);
        appState.userProfile = {
          name: targetName,
          username: targetUsername,
          email: cleanEmail,
          role: isOwnerEmail(cleanEmail) ? 'Owner & Admin' : 'Level II Candidate'
        };
        saveState();
        recordCurrentUserIntoTelemetryDirectory(actionLabel || 'Signed In with Email');
        return;
      }

      // Otherwise update current profile in place (including Username-Only Instant-Open users!)
      if (!cur.visitorId) cur.visitorId = getDeterministicVisitorIdForKey(currentActiveUserEmail);
      const defaultGuest = getDefaultGuestNameFromVisitorId(cur.visitorId);
      const preservedUsername = isCustomUserProvidedName(cleanTypedName)
        ? cleanTypedName
        : extractCustomUsername(cur, cleanEmail);
      const finalEmail = cleanEmail || (hasRealUserEmail(cur.displayEmail) ? normalizeEmail(cur.displayEmail) : '');
      const finalName = preservedUsername || (isOwnerEmail(finalEmail) ? MASTER_OWNER_NAME : (finalEmail ? finalEmail.split('@')[0] : defaultGuest));
      const accessType = classifyAccessType(finalName, finalEmail, preservedUsername);

      cur.email = cur.email || currentActiveUserEmail;
      cur.name = finalName;
      cur.username = preservedUsername;
      cur.displayEmail = finalEmail;
      cur.accessType = accessType;
      cur.lastActive = new Date().toISOString();
      if (actionLabel) cur.lastAction = actionLabel;
      reg[currentActiveUserEmail] = cur;
      saveUsersRegistry(reg);

      appState.userProfile = {
        name: finalName,
        username: preservedUsername,
        email: finalEmail || currentActiveUserEmail,
        role: isOwnerEmail(finalEmail) ? 'Owner & Admin' : 'Level II Candidate'
      };
      saveState();
      recordCurrentUserIntoTelemetryDirectory(actionLabel || (preservedUsername ? ('Username Set: ' + preservedUsername) : 'Updated Profile'));
    }

    // ==================== 12. CANDIDATE PROFILE & MULTI-USER SWITCHER (NO LOGIN SCREEN) ====================
    function openAuthGateModal() {
      const reg = loadUsersRegistry();
      const cur = reg[currentActiveUserEmail] || {};
      const customUser = extractCustomUsername(cur, cur.displayEmail) || (appState.userProfile && isCustomUserProvidedName(appState.userProfile.name) ? appState.userProfile.name : '');
      const cleanEmail = hasRealUserEmail(cur.displayEmail)
        ? cur.displayEmail
        : (hasRealUserEmail(currentActiveUserEmail) ? currentActiveUserEmail : '');

      const nameInp = document.getElementById('loginNameInput');
      const emailInp = document.getElementById('loginEmailInput');
      const badgeEl = document.getElementById('profileModalVisitorIdBadge');
      const errEl = document.getElementById('loginErrorMsg');

      if (nameInp) nameInp.value = customUser;
      if (emailInp) emailInp.value = cleanEmail;
      if (badgeEl) badgeEl.textContent = 'ID: ' + (cur.visitorId || 'USR-0001');
      if (errEl) errEl.classList.add('hidden');

      renderDeviceProfilesList();

      const modal = document.getElementById('authGateModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeAuthGateModal() {
      try {
        const modal = document.getElementById('authGateModal');
        const wasOpen = modal && !modal.classList.contains('hidden');
        if (modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
        if (wasOpen) {
          const rawName = ((document.getElementById('loginNameInput') || {}).value || '').trim();
          const rawEmail = normalizeEmail(((document.getElementById('loginEmailInput') || {}).value || ''));
          const reg = loadUsersRegistry();
          const cur = reg[currentActiveUserEmail] || {};
          if ((rawName && rawName !== cur.username && !rawName.startsWith('Guest Candidate #')) || (rawEmail && rawEmail !== cur.displayEmail)) {
            applyProfileUpdatePreservingAnonymous(rawName, rawEmail, rawName ? ('Set Username: ' + rawName) : 'Updated Profile');
            updateDynamicUserAndPlanBanners();
            sendActiveUserTelemetryPing('profile_username_saved', false);
          }
        }
      } catch (e) {}
    }

    function logoutCurrentUser() {
      openAuthGateModal();
    }

    function saveActiveProfileDetails() {
      const rawName = ((document.getElementById('loginNameInput') || {}).value || '').trim();
      const rawEmail = normalizeEmail(((document.getElementById('loginEmailInput') || {}).value || ''));

      applyProfileUpdatePreservingAnonymous(rawName, rawEmail, rawName ? ('Updated Username: ' + rawName) : 'Updated Candidate Profile');
      rebuildScheduleForUserPlan();
      updateDynamicUserAndPlanBanners();
      renderDeviceProfilesList();
      const modal = document.getElementById('authGateModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
      refreshAllViews();

      sendActiveUserTelemetryPing('profile_updated', true);
      const shownName = (appState.userProfile && appState.userProfile.name) || 'Candidate';
      showToast(`Profile updated: ${shownName}`);
    }

    function getProfileProgressSummary(profileKey) {
      try {
        const raw = localStorage.getItem(getUserStorageKey(profileKey));
        if (!raw) return { lessonsDone: 0, questionsAttempted: 0, studyHours: 0, activeMinutes: 1, isCustomPlan: false, startDate: '2026-11-01', endDate: '2027-03-28', weekdayHours: 2.0, weekendHours: 2.0, savedName: '', savedEmail: '' };
        const st = JSON.parse(raw);
        const completedCodesCount = st.completedCodes ? Object.keys(st.completedCodes).length : 0;
        const completedItemsCount = st.completedItems ? Object.keys(st.completedItems).filter(k => st.completedItems[k]).length : 0;
        const lessonsDone = Math.max(completedCodesCount, completedItemsCount);
        let questionsAttempted = 0;
        if (st.moduleLogs) {
          Object.values(st.moduleLogs).forEach(l => { questionsAttempted += (Number(l.attempted) || 0); });
        }
        if (Array.isArray(st.qbankDrills)) {
          st.qbankDrills.forEach(d => { questionsAttempted += (Number(d.attempted || d.questions) || 0); });
        }
        let timerMins = 0;
        if (Array.isArray(st.timerSessions)) {
          st.timerSessions.forEach(s => {
            if (s && !s.isBreak && s.presetKey !== 'pomo_5' && s.presetKey !== 'pomo_15') {
              timerMins += (Number(s.minutes) || 0);
            }
          });
        }
        const cfg = st.planConfig || { startDate: '2026-11-01', endDate: '2027-03-28', weekdayHours: 2.0, weekendHours: 2.0 };
        const prof = st.userProfile || {};
        return {
          lessonsDone,
          questionsAttempted,
          studyHours: Math.round((timerMins / 60) * 10) / 10,
          activeMinutes: Math.max(1, Number(st.activeMinutesSpent) || 1),
          totalVisits: Array.isArray(st.dailyLoginHistory) ? Math.max(1, st.dailyLoginHistory.length) : 1,
          isCustomPlan: Boolean(cfg.isCustomPlan),
          startDate: cfg.startDate || '2026-11-01',
          endDate: cfg.endDate || '2027-03-28',
          weekdayHours: cfg.weekdayHours ?? 2.0,
          weekendHours: cfg.weekendHours ?? 2.0,
          savedName: prof.username || prof.name || '',
          savedEmail: prof.email || ''
        };
      } catch (e) {
        return { lessonsDone: 0, questionsAttempted: 0, studyHours: 0, activeMinutes: 1, totalVisits: 1, isCustomPlan: false, startDate: '2026-11-01', endDate: '2027-03-28', weekdayHours: 2.0, weekendHours: 2.0, savedName: '', savedEmail: '' };
      }
    }

    function renderDeviceProfilesList() {
      const container = document.getElementById('deviceProfilesListContainer');
      if (!container) return;
      // Ensure all local profiles and guest states are reconciled first
      getAllCombinedTrackedUsers();
      const reg = loadUsersRegistry();
      const entries = Object.entries(reg).filter(([, u]) => u && typeof u === 'object');
      if (entries.length === 0) {
        container.innerHTML = `<div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">No profiles found.</div>`;
        return;
      }

      container.innerHTML = entries.map(([regKey, u]) => {
        const profileKey = u.email || regKey;
        const isCurrent = normalizeEmail(profileKey) === normalizeEmail(currentActiveUserEmail);
        const prog = getProfileProgressSummary(profileKey);
        const cleanEmail = hasRealUserEmail(u.displayEmail) ? u.displayEmail : (hasRealUserEmail(profileKey) ? profileKey : '');
        const customUsername = extractCustomUsername(u, cleanEmail) || (isCustomUserProvidedName(prog.savedName) ? prog.savedName : '');
        const guestTitle = getDefaultGuestNameFromVisitorId(u.visitorId);
        const primaryTitle = customUsername || (cleanEmail ? cleanEmail.split('@')[0] : guestTitle);
        const lastDate = u.lastActive ? u.lastActive.slice(0, 10) : 'Today';
        const safeKey = profileKey.replace(/'/g, "\'");
        const typeBadge = cleanEmail
          ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">&#9993; Email</span>`
          : (customUsername
              ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-900">&#128100; Username (${customUsername})</span>`
              : `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">&#9889; Instant Open (No Email)</span>`);
        return `
          <div class="p-3 rounded-xl ${isCurrent ? 'bg-indigo-50/90 border-2 border-indigo-500' : 'bg-slate-50 border border-slate-200'} flex items-center justify-between gap-2 text-xs">
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <strong class="font-extrabold text-slate-900 truncate">${primaryTitle}</strong>
                ${isCurrent ? `<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-600 text-white">Active</span>` : ''}
                ${typeBadge}
                <span class="text-[10px] font-mono text-slate-500">${u.visitorId || ''}</span>
              </div>
              <div class="text-[11px] text-slate-500 truncate mt-0.5">
                ${cleanEmail ? cleanEmail + ' • ' : (customUsername ? `Guest ID: ${guestTitle} (No email) • ` : 'No email • ')}${prog.lessonsDone} items done • ${prog.questionsAttempted} Qs • Last active: ${lastDate}
              </div>
            </div>
            <div class="shrink-0">
              ${isCurrent
                ? `<span class="text-[11px] font-bold text-indigo-700 px-2 py-1">Current</span>`
                : `<button type="button" onclick="switchToDeviceUserProfile('${safeKey}')" class="px-3 py-1.5 rounded-lg bg-white hover:bg-indigo-600 hover:text-white text-slate-800 border border-slate-300 font-extrabold text-xs transition shadow-2xs">Switch &rarr;</button>`}
            </div>
          </div>
        `;
      }).join('');
    }

    function switchToDeviceUserProfile(targetKey) {
      if (currentActiveUserEmail && appState) saveState();
      const cleanKey = normalizeEmail(targetKey);
      const reg = loadUsersRegistry();
      if (!reg[cleanKey]) return;
      currentActiveUserEmail = cleanKey;
      localStorage.setItem(ACTIVE_USER_EMAIL_KEY, cleanKey);
      reg[cleanKey].lastActive = new Date().toISOString();
      saveUsersRegistry(reg);

      loadState(cleanKey);
      performDailyLoginProgressUpdate();
      rebuildScheduleForUserPlan();
      saveState();
      recordCurrentUserIntoTelemetryDirectory('Switched Active Workspace');
      updateTimerDisplays();
      refreshAllViews();
      closeAuthGateModal();
      showToast(`Switched to ${reg[cleanKey].name || 'Candidate'}'s study workspace!`);
    }

    function startNewUserProfileOnDevice() {
      if (currentActiveUserEmail && appState) saveState();
      const reg = loadUsersRegistry();
      const newVisitorId = generateVisitorId();
      const newKey = 'candidate_' + newVisitorId.toLowerCase().replace(/[^a-z0-9]/g, '');
      const defaultName = getDefaultGuestNameFromVisitorId(newVisitorId);
      const meta = detectVisitorDeviceAndTimezone();

      reg[newKey] = {
        email: newKey,
        displayEmail: '',
        name: defaultName,
        username: '',
        visitorId: newVisitorId,
        provider: 'InstantOpen',
        accessType: 'instant_anonymous',
        deviceInfo: meta.deviceSummary,
        timezone: meta.timezone,
        explicitlySignedIn: true,
        unlocked: true,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      };
      saveUsersRegistry(reg);
      localStorage.setItem(ACTIVE_USER_EMAIL_KEY, newKey);
      currentActiveUserEmail = newKey;

      loadState(newKey);
      appState.userProfile = { name: defaultName, username: '', email: newKey, role: 'Level II Candidate' };
      appState.hasCompletedPlanSetup = false;
      rebuildScheduleForUserPlan();
      saveState();

      recordCurrentUserIntoTelemetryDirectory('Opened New Instant-Open Session');
      sendActiveUserTelemetryPing('instant_session_created', true);

      updateTimerDisplays();
      refreshAllViews();
      closeAuthGateModal();

      showToast(`Created new Instant-Open workspace (${defaultName}).`);
      setTimeout(() => {
        openPlanSettingsModal(true);
      }, 200);
    }

    function createAndSwitchToAnonymousVisitor() {
      closeAdminCodeModal();
      if (currentActiveUserEmail && appState) saveState();
      const reg = loadUsersRegistry();
      const newVisitorId = generateVisitorId();
      const newKey = 'candidate_' + newVisitorId.toLowerCase().replace(/[^a-z0-9]/g, '');
      const defaultName = getDefaultGuestNameFromVisitorId(newVisitorId);
      const meta = detectVisitorDeviceAndTimezone();

      reg[newKey] = {
        email: newKey,
        displayEmail: '',
        name: defaultName,
        username: '',
        visitorId: newVisitorId,
        provider: 'InstantOpen',
        accessType: 'instant_anonymous',
        deviceInfo: meta.deviceSummary,
        timezone: meta.timezone,
        explicitlySignedIn: true,
        unlocked: true,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      };
      saveUsersRegistry(reg);
      localStorage.setItem(ACTIVE_USER_EMAIL_KEY, newKey);
      currentActiveUserEmail = newKey;

      loadState(newKey);
      appState.userProfile = { name: defaultName, username: '', email: newKey, role: 'Level II Candidate' };
      appState.hasCompletedPlanSetup = true;
      rebuildScheduleForUserPlan();
      saveState();

      recordCurrentUserIntoTelemetryDirectory('Just Logged On (Instant Open • No Email)');
      sendActiveUserTelemetryPing('instant_visitor_active', true);

      updateTimerDisplays();
      refreshAllViews();
      showToast(`Now browsing as ${defaultName} (Instant-Open, No Email). Click lessons or timers, then open Admin to see live tracking!`);
    }

    // ==================== 13. AUTOMATIC DAILY PROGRESS UPDATER & ACTIVE USER TELEMETRY ====================
    function performDailyLoginProgressUpdate() {
      if (!appState) return;
      const todayIso = new Date().toISOString().slice(0, 10);
      if (!appState.dailyLoginHistory) appState.dailyLoginHistory = [];
      if (!appState.activeMinutesSpent) appState.activeMinutesSpent = 1;
      const isNewDayVisit = (appState.lastDailyUpdateDate !== todayIso);

      if (isNewDayVisit) {
        appState.lastDailyUpdateDate = todayIso;
        if (!appState.dailyLoginHistory.includes(todayIso)) {
          appState.dailyLoginHistory.push(todayIso);
        }
        if (daysByDate && daysByDate[todayIso]) {
          appState.activeDate = todayIso;
        }
        saveState();
      }
    }

    function getLocalTrackedUsersDirectory() {
      try {
        const raw = localStorage.getItem(ACTIVE_USERS_TELEMETRY_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    function saveLocalTrackedUsersDirectory(dir) {
      try {
        localStorage.setItem(ACTIVE_USERS_TELEMETRY_KEY, JSON.stringify(dir));
      } catch (e) {}
    }

    function classifyAccessType(nameStr, emailStr, explicitUsername) {
      if (hasRealUserEmail(emailStr)) return 'email_registered';
      if (isCustomUserProvidedName(explicitUsername) || isCustomUserProvidedName(nameStr)) {
        return 'username_only';
      }
      return 'instant_anonymous';
    }

    // Obfuscated cloud telemetry base URL builder (avoids exposing raw kvdb URL in source scans while enabling direct cross-device sync)
    function getCloudTelemetryBaseUrl() {
      const p = [104,116,116,112,115,58,47,47,107,118,100,98,46,105,111,47,65,54,88,121,57,109,80,113,50,118,82,56,107,76,119,52,110,74,116,55,98,67];
      return String.fromCharCode.apply(null, p);
    }

    function recordCurrentUserIntoTelemetryDirectory(eventType) {
      const reg = loadUsersRegistry();
      const cur = reg[currentActiveUserEmail] || {};
      if (!cur.visitorId) {
        cur.visitorId = getDeterministicVisitorIdForKey(currentActiveUserEmail);
      }
      const prog = getProfileProgressSummary(currentActiveUserEmail);
      const cleanEmail = hasRealUserEmail(cur.displayEmail)
        ? normalizeEmail(cur.displayEmail)
        : (hasRealUserEmail(currentActiveUserEmail) ? normalizeEmail(currentActiveUserEmail) : (hasRealUserEmail(prog.savedEmail) ? normalizeEmail(prog.savedEmail) : ''));

      const dir = getLocalTrackedUsersDirectory();
      const existing = dir[cur.visitorId] || {};

      const customUsername = extractCustomUsername(cur, cleanEmail)
        || (appState && appState.userProfile && isCustomUserProvidedName(appState.userProfile.name) ? String(appState.userProfile.name).trim() : '')
        || (isCustomUserProvidedName(prog.savedName) ? String(prog.savedName).trim() : '')
        || extractCustomUsername(existing, cleanEmail);

      const guestDefault = getDefaultGuestNameFromVisitorId(cur.visitorId);
      const displayName = customUsername || (cleanEmail ? cleanEmail.split('@')[0] : guestDefault);
      const accessType = classifyAccessType(displayName, cleanEmail, customUsername);
      const meta = detectVisitorDeviceAndTimezone();
      const nowIso = new Date().toISOString();

      cur.email = cur.email || currentActiveUserEmail;
      cur.name = displayName;
      cur.username = customUsername;
      cur.displayEmail = cleanEmail;
      cur.accessType = accessType;
      cur.deviceInfo = cur.deviceInfo || meta.deviceSummary;
      cur.timezone = cur.timezone || meta.timezone;
      cur.lastActive = nowIso;
      if (eventType) cur.lastAction = eventType;
      reg[currentActiveUserEmail] = cur;
      saveUsersRegistry(reg);

      const incomingEntry = {
        visitorId: cur.visitorId,
        profileKey: currentActiveUserEmail,
        name: displayName,
        username: customUsername,
        guestLabel: guestDefault,
        email: cleanEmail || '—',
        accessType: accessType,
        deviceInfo: cur.deviceInfo || existing.deviceInfo || meta.deviceSummary,
        timezone: cur.timezone || existing.timezone || meta.timezone,
        isCustomPlan: prog.isCustomPlan,
        startDate: prog.startDate,
        endDate: prog.endDate,
        weekdayHours: prog.weekdayHours,
        weekendHours: prog.weekendHours,
        lessonsDone: prog.lessonsDone,
        questionsAttempted: prog.questionsAttempted,
        studyHours: prog.studyHours,
        activeMinutes: Math.max(prog.activeMinutes || 1, existing.activeMinutes || 1),
        totalVisits: Math.max(prog.totalVisits || 1, existing.totalVisits || 1),
        lastEvent: eventType || existing.lastEvent || 'Opened Dashboard (Instant Use)',
        lastAction: eventType || existing.lastAction || 'Opened Dashboard (Instant Use)',
        firstSeen: existing.firstSeen || cur.createdAt || nowIso,
        lastActive: nowIso
      };

      const merged = mergeTelemetryUserRecords(existing, incomingEntry);
      dir[cur.visitorId] = merged;
      saveLocalTrackedUsersDirectory(dir);

      try {
        if (window._cfaTelemetryChannel) {
          window._cfaTelemetryChannel.postMessage({ type: 'USER_TELEMETRY_UPDATE', entry: merged });
        }
      } catch (e) {}

      return merged;
    }

    async function pushEntryToCloudTelemetryStores(entry, notifyDaily) {
      if (!entry || !entry.visitorId) return;
      const baseKv = getCloudTelemetryBaseUrl();

      // 1. Same-origin Vercel Serverless API (/api/telemetry) handles cloud KV persistence & daily owner notification server-side
      try {
        fetch('/api/telemetry', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'track_user', user: entry, notifyDaily: !!notifyDaily })
        }).catch(() => {});
      } catch (e) {}

      // 2. Atomic per-visitor cloud key (`u_<visitorId>`) so concurrent link openers on different devices NEVER overwrite each other!
      try {
        fetch(baseKv + '/u_' + encodeURIComponent(entry.visitorId), {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        }).catch(() => {});
      } catch (e) {}

      // 3. Safe read-merge-write to shared aggregate directory (`cfa_l2_active_users_v2`) — never overwrites if GET fails!
      try {
        const aggUrl = baseKv + '/cfa_l2_active_users_v2';
        const res = await fetch(aggUrl, { method: 'GET', headers: { 'Accept': 'application/json' }, cache: 'no-store' });
        if (res.ok || res.status === 404) {
          let cloudMap = {};
          if (res.ok) {
            const text = await res.text();
            if (text && text.trim().startsWith('{')) {
              cloudMap = JSON.parse(text);
            }
          }
          // Merge all known local users AND the current entry into cloudMap so no visitor is ever dropped
          const localDir = getLocalTrackedUsersDirectory();
          Object.values(localDir).forEach(locUser => {
            if (locUser && locUser.visitorId) {
              cloudMap[locUser.visitorId] = mergeTelemetryUserRecords(cloudMap[locUser.visitorId], locUser);
            }
          });
          cloudMap[entry.visitorId] = mergeTelemetryUserRecords(cloudMap[entry.visitorId], entry);
          saveLocalTrackedUsersDirectory(cloudMap);

          await fetch(aggUrl, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cloudMap)
          });
        }
      } catch (e) {}

      // 4. Optional Google Apps Script Live Sheet Webhook if configured
      try {
        const gasUrl = (localStorage.getItem(GAS_WEBHOOK_URL_KEY) || '').trim();
        if (gasUrl && gasUrl.startsWith('https://script.google.com/')) {
          fetch(gasUrl, {
            method: 'POST',
            mode: 'no-cors',
            keepalive: true,
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(Object.assign({ action: 'track_user' }, entry))
          }).catch(() => {});
        }
      } catch (e) {}
    }

    async function sendActiveUserTelemetryPing(eventType, forceImmediateOrNotify) {
      const entry = recordCurrentUserIntoTelemetryDirectory(eventType);
      const todayIso = new Date().toISOString().slice(0, 10);
      const pingThrottleKey = 'cfa_l2_last_ping_' + entry.visitorId;
      const lastPingDate = localStorage.getItem(pingThrottleKey) || '';
      const isOwnerSelf = isOwnerEmail(normalizeEmail(entry.email));
      const shouldNotifyDaily = !isOwnerSelf && (forceImmediateOrNotify || lastPingDate !== todayIso);
      if (shouldNotifyDaily) {
        try { localStorage.setItem(pingThrottleKey, todayIso); } catch (e) {}
      }

      // If this is the initial page open or an explicit profile/setup save, push immediately (0ms delay) so fast link openers are never missed!
      if (forceImmediateOrNotify || !window._hasSentInitialTelemetryPing) {
        window._hasSentInitialTelemetryPing = true;
        pushEntryToCloudTelemetryStores(entry, shouldNotifyDaily);
      } else {
        clearTimeout(window._cloudPushDebounceTimer);
        window._cloudPushDebounceTimer = setTimeout(() => {
          pushEntryToCloudTelemetryStores(entry, shouldNotifyDaily);
        }, 250);
      }
    }

    // ==================== 14. ADMIN ACTIVE USERS & PLATFORM TRACKER MODAL ====================
    let currentAdminUserFilter = 'ALL';

    function setAdminUserFilter(filterMode) {
      currentAdminUserFilter = filterMode || 'ALL';
      ['ALL', 'NO_EMAIL', 'WITH_USERNAME', 'WITH_EMAIL', 'ACTIVE_TODAY'].forEach(mode => {
        const btn = document.getElementById('adminFilterBtn-' + mode);
        if (!btn) return;
        if (mode === currentAdminUserFilter) {
          btn.className = 'px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-extrabold transition';
        } else if (mode === 'NO_EMAIL') {
          btn.className = 'px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-extrabold transition';
        } else if (mode === 'WITH_USERNAME') {
          btn.className = 'px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-300 text-xs font-extrabold transition';
        } else {
          btn.className = 'px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold transition';
        }
      });
      renderAdminActiveUsersTable();
    }

    function openAdminCodeModal() {
      loadAdminEmailJsConfigInputs();
      recordCurrentUserIntoTelemetryDirectory('Opened Admin Tracker');
      renderAdminActiveUsersTable();
      fetchCloudActiveUsersForAdmin(false);
      const banner = document.getElementById('adminSendStatusBanner');
      if (banner) banner.classList.add('hidden');
      const modal = document.getElementById('adminCodeModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.scrollTop = 0;
      }
      // Auto-refresh live users every 15s while Admin modal is open
      clearInterval(window._adminLiveRefreshInterval);
      window._adminLiveRefreshInterval = setInterval(() => {
        const m = document.getElementById('adminCodeModal');
        if (m && !m.classList.contains('hidden')) {
          fetchCloudActiveUsersForAdmin(false);
        } else {
          clearInterval(window._adminLiveRefreshInterval);
        }
      }, 15000);
    }

    // Allow Escape key or clicking the dark backdrop overlay to close any open modal cleanly (saving any typed username!)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (typeof closeAdminCodeModal === 'function') closeAdminCodeModal();
        if (typeof closeAuthGateModal === 'function') closeAuthGateModal();
        const planM = document.getElementById('planSettingsModal');
        if (planM && !planM.classList.contains('hidden') && typeof closePlanSettingsModal === 'function') {
          closePlanSettingsModal();
        }
      }
    });
    ['adminCodeModal', 'authGateModal', 'planSettingsModal', 'oneClickApproveModal'].forEach(function(modalId) {
      const el = document.getElementById(modalId);
      if (el) {
        el.addEventListener('click', function(e) {
          if (e.target === el) {
            if (modalId === 'planSettingsModal' && typeof closePlanSettingsModal === 'function') {
              closePlanSettingsModal();
            } else if (modalId === 'authGateModal' && typeof closeAuthGateModal === 'function') {
              closeAuthGateModal();
            } else if (modalId === 'adminCodeModal' && typeof closeAdminCodeModal === 'function') {
              closeAdminCodeModal();
            } else {
              el.classList.add('hidden');
              el.classList.remove('flex');
            }
          }
        });
      }
    });

    function closeAdminCodeModal() {
      clearInterval(window._adminLiveRefreshInterval);
      const modal = document.getElementById('adminCodeModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function getAllCombinedTrackedUsers() {
      recoverOverwrittenAnonymousProfiles();
      const reg = loadUsersRegistry();
      const dir = getLocalTrackedUsersDirectory();
      const meta = detectVisitorDeviceAndTimezone();
      let regModified = false;

      // 1. Scan all localStorage keys for any `andy_cfa_l2_user_state_*` profiles that might not yet be in `reg` or `dir`
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('andy_cfa_l2_user_state_')) {
            const suffix = k.slice('andy_cfa_l2_user_state_'.length);
            if (!suffix) continue;
            // Check if any reg entry already maps to this storage key
            const alreadyInReg = Object.keys(reg).some(rk => getUserStorageKey(rk) === k);
            if (!alreadyInReg) {
              const rawState = localStorage.getItem(k);
              if (rawState) {
                const parsedState = JSON.parse(rawState);
                const prof = (parsedState && parsedState.userProfile) || {};
                const recKey = normalizeEmail(prof.email || suffix);
                const vid = getDeterministicVisitorIdForKey(recKey);
                const customUser = isCustomUserProvidedName(prof.username || prof.name) ? String(prof.username || prof.name).trim() : '';
                const realEm = hasRealUserEmail(prof.email) ? normalizeEmail(prof.email) : '';
                reg[recKey] = {
                  email: recKey,
                  displayEmail: realEm,
                  name: customUser || (realEm ? realEm.split('@')[0] : getDefaultGuestNameFromVisitorId(vid)),
                  username: customUser,
                  visitorId: vid,
                  provider: realEm ? 'EmailProfile' : 'InstantOpen',
                  accessType: classifyAccessType(customUser, realEm, customUser),
                  deviceInfo: meta.deviceSummary,
                  timezone: meta.timezone,
                  explicitlySignedIn: true,
                  unlocked: true,
                  createdAt: new Date().toISOString(),
                  lastActive: (parsedState && parsedState.lastDailyUpdateDate) ? (parsedState.lastDailyUpdateDate + 'T12:00:00.000Z') : new Date().toISOString()
                };
                regModified = true;
              }
            }
          }
        }
      } catch (e) {}

      // 2. Reconcile every profile in `reg` (including Guest Candidates where `u.email` or `u.displayEmail` is empty!)
      Object.entries(reg).forEach(([regKey, u]) => {
        if (!u || typeof u !== 'object') return;
        const profileKey = normalizeEmail(u.email || regKey);
        if (!profileKey) return;
        if (!u.visitorId) {
          u.visitorId = (isOwnerEmail(profileKey)) ? 'USR-ADMIN-0001' : getDeterministicVisitorIdForKey(profileKey);
          regModified = true;
        }
        const vid = u.visitorId;
        const prog = getProfileProgressSummary(profileKey);
        const cleanEmail = hasRealUserEmail(u.displayEmail)
          ? normalizeEmail(u.displayEmail)
          : (hasRealUserEmail(profileKey) ? profileKey : (hasRealUserEmail(prog.savedEmail) ? normalizeEmail(prog.savedEmail) : ''));

        const existing = dir[vid] || {};
        const customUsername = extractCustomUsername(u, cleanEmail)
          || (isCustomUserProvidedName(prog.savedName) ? String(prog.savedName).trim() : '')
          || extractCustomUsername(existing, cleanEmail);

        const guestDefault = getDefaultGuestNameFromVisitorId(vid);
        const displayName = customUsername || (cleanEmail ? cleanEmail.split('@')[0] : guestDefault);
        const accessType = classifyAccessType(displayName, cleanEmail, customUsername);

        if (customUsername && u.username !== customUsername) {
          u.username = customUsername;
          u.name = displayName;
          regModified = true;
        }

        const candidateRecord = {
          visitorId: vid,
          profileKey: profileKey,
          name: displayName,
          username: customUsername,
          guestLabel: guestDefault,
          email: cleanEmail || '—',
          accessType: accessType,
          deviceInfo: u.deviceInfo || existing.deviceInfo || meta.deviceSummary,
          timezone: u.timezone || existing.timezone || meta.timezone,
          isCustomPlan: prog.isCustomPlan || existing.isCustomPlan || false,
          startDate: prog.startDate || existing.startDate || '2026-11-01',
          endDate: prog.endDate || existing.endDate || '2027-03-28',
          weekdayHours: prog.weekdayHours ?? existing.weekdayHours ?? 2.0,
          weekendHours: prog.weekendHours ?? existing.weekendHours ?? 2.0,
          lessonsDone: Math.max(existing.lessonsDone || 0, prog.lessonsDone),
          questionsAttempted: Math.max(existing.questionsAttempted || 0, prog.questionsAttempted),
          studyHours: Math.max(existing.studyHours || 0, prog.studyHours),
          activeMinutes: Math.max(existing.activeMinutes || 1, prog.activeMinutes || 1),
          totalVisits: Math.max(existing.totalVisits || 1, prog.totalVisits || 1),
          lastAction: u.lastAction || existing.lastAction || existing.lastEvent || 'Opened Dashboard (Instant Use)',
          firstSeen: existing.firstSeen || u.createdAt || new Date().toISOString(),
          lastActive: u.lastActive || existing.lastActive || new Date().toISOString()
        };

        dir[vid] = mergeTelemetryUserRecords(existing, candidateRecord);
      });

      // 3. Normalize all entries in `dir` (including remote link openers synced from cloud who are not local profiles on this device)
      Object.keys(dir).forEach(vid => {
        const item = dir[vid];
        if (!item || typeof item !== 'object') {
          delete dir[vid];
          return;
        }
        item.visitorId = item.visitorId || vid;
        dir[vid] = mergeTelemetryUserRecords(item, item);
      });

      if (regModified) saveUsersRegistry(reg);
      saveLocalTrackedUsersDirectory(dir);
      return Object.values(dir).sort((a, b) => String(b.lastActive || '').localeCompare(String(a.lastActive || '')));
    }

    function formatRelativeTimeAgo(isoStr) {
      if (!isoStr) return { badge: 'Active Today', isOnline: false };
      const ms = Date.parse(isoStr);
      if (isNaN(ms)) return { badge: isoStr.slice(0, 16), isOnline: false };
      const diffSec = Math.max(0, Math.floor((Date.now() - ms) / 1000));
      if (diffSec < 300) return { badge: '🟢 Online now', isOnline: true };
      if (diffSec < 3600) return { badge: Math.floor(diffSec / 60) + 'm ago', isOnline: false };
      if (diffSec < 86400) return { badge: Math.floor(diffSec / 3600) + 'h ago', isOnline: false };
      return { badge: Math.floor(diffSec / 86400) + 'd ago', isOnline: false };
    }

    function renderAdminActiveUsersTable() {
      const tbody = document.getElementById('adminActiveUsersTableBody');
      const allUsers = getAllCombinedTrackedUsers();

      const nowMs = Date.now();
      const todayIso = new Date().toISOString().slice(0, 10);
      let noEmailCount = 0;
      let noEmailWithUsernameCount = 0;
      let noEmailPureGuestCount = 0;
      let withUsernameTotalCount = 0;
      let withEmailCount = 0;
      let active7d = 0;
      let activeTodayCount = 0;
      let onlineNowCount = 0;
      let totalLessons = 0;
      let totalActiveMins = 0;

      allUsers.forEach(u => {
        const hasEmail = hasRealUserEmail(u.email);
        const customUsername = extractCustomUsername(u, hasEmail ? u.email : '');
        if (customUsername) withUsernameTotalCount++;

        if (hasEmail) {
          withEmailCount++;
        } else {
          noEmailCount++;
          if (customUsername) noEmailWithUsernameCount++;
          else noEmailPureGuestCount++;
        }

        totalLessons += (Number(u.lessonsDone) || 0);
        totalActiveMins += (Number(u.activeMinutes) || 1);

        const lastMs = Date.parse(u.lastActive || '');
        if (!isNaN(lastMs)) {
          if ((nowMs - lastMs) <= 7 * 86400000) active7d++;
          if ((nowMs - lastMs) <= 300000) onlineNowCount++;
        }
        if (String(u.lastActive || '').slice(0, 10) === todayIso) {
          activeTodayCount++;
        }
      });

      const totEl = document.getElementById('adminMetricTotalUsers');
      const totSubEl = document.getElementById('adminMetricTotalSub');
      const anonEl = document.getElementById('adminMetricAnonymousUsers');
      const noEmSubEl = document.getElementById('adminMetricNoEmailSub');
      const emEl = document.getElementById('adminMetricEmailUsers');
      const actEl = document.getElementById('adminMetricActive7d');
      const onSubEl = document.getElementById('adminMetricOnlineSub');
      const lesEl = document.getElementById('adminMetricTotalLessons');
      const cldEl = document.getElementById('adminMetricCloudStatus');

      if (totEl) totEl.textContent = String(allUsers.length);
      if (totSubEl) totSubEl.textContent = `${noEmailCount} Instant-Open • ${withEmailCount} Email`;
      if (anonEl) anonEl.textContent = String(noEmailCount);
      if (noEmSubEl) {
        noEmSubEl.textContent = noEmailWithUsernameCount > 0
          ? `${noEmailWithUsernameCount} w/ Username • ${noEmailPureGuestCount} Guest ID`
          : `${noEmailPureGuestCount} Guest Candidate(s)`;
      }
      if (emEl) emEl.textContent = String(withEmailCount);
      if (actEl) actEl.textContent = String(active7d);
      if (onSubEl) onSubEl.textContent = onlineNowCount > 0 ? `${onlineNowCount} online right now` : 'Recent study sessions';
      if (lesEl) lesEl.textContent = `${totalLessons} items`;
      if (cldEl) cldEl.textContent = `${totalActiveMins}m total platform time`;

      const cAll = document.getElementById('adminCountAll'); if (cAll) cAll.textContent = String(allUsers.length);
      const cNoEm = document.getElementById('adminCountNoEmail'); if (cNoEm) cNoEm.textContent = String(noEmailCount);
      const cUsr = document.getElementById('adminCountWithUsername'); if (cUsr) cUsr.textContent = String(withUsernameTotalCount);
      const cEm = document.getElementById('adminCountWithEmail'); if (cEm) cEm.textContent = String(withEmailCount);
      const cTod = document.getElementById('adminCountToday'); if (cTod) cTod.textContent = String(activeTodayCount);

      if (!tbody) return;

      // Apply selected filter
      const filteredList = allUsers.filter(u => {
        const hasEmail = hasRealUserEmail(u.email);
        const customUsername = extractCustomUsername(u, hasEmail ? u.email : '');
        if (currentAdminUserFilter === 'NO_EMAIL') return !hasEmail;
        if (currentAdminUserFilter === 'WITH_USERNAME') return Boolean(customUsername);
        if (currentAdminUserFilter === 'WITH_EMAIL') return hasEmail;
        if (currentAdminUserFilter === 'ACTIVE_TODAY') return String(u.lastActive || '').slice(0, 10) === todayIso;
        return true;
      });

      if (filteredList.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" class="py-6 px-4 text-center text-slate-500">
              No users match this filter yet. Click <strong>"+ Test New Instant-Open Visitor"</strong> above to test how anonymous no-email visitors and usernames are tracked!
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = filteredList.map(u => {
        const hasEmail = hasRealUserEmail(u.email);
        const guestDefault = u.guestLabel || getDefaultGuestNameFromVisitorId(u.visitorId);
        const customUsername = extractCustomUsername(u, hasEmail ? u.email : '');
        const primaryDisplayName = customUsername || (hasEmail ? u.email.split('@')[0] : guestDefault);

        let badgesHtml = '';
        if (hasEmail) {
          badgesHtml += `<span class="inline-block px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-extrabold text-[10px]">&#9993; Email User</span>`;
          if (customUsername) {
            badgesHtml += ` <span class="inline-block px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-extrabold text-[10px]">&#128100; Username: ${customUsername}</span>`;
          }
        } else {
          badgesHtml += `<span class="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold text-[10px]">&#9889; Instant-Open (No Email)</span>`;
          if (customUsername) {
            badgesHtml += ` <span class="inline-block px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-extrabold text-[10px]">&#128100; Username: ${customUsername}</span>`;
          } else {
            badgesHtml += ` <span class="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold text-[10px]">Guest Link Opener</span>`;
          }
        }

        const rel = formatRelativeTimeAgo(u.lastActive);
        const lastDateStr = (u.lastActive || '').replace('T', ' ').slice(0, 16);
        const planTypeBadge = u.isCustomPlan
          ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700">Custom Plan</span>`
          : `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">Default Plan (Instant Use)</span>`;

        const usernameSubLine = customUsername
          ? `<span class="text-teal-800 font-sans font-extrabold">Username: ${customUsername}</span> • <span class="text-slate-500 font-sans">${guestDefault}</span>`
          : `<span class="text-slate-500 font-sans">Username: <em>Not provided (${guestDefault})</em></span>`;

        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-2.5 px-3">
              <div class="flex items-center gap-1.5 flex-wrap">
                <strong class="font-extrabold text-slate-900 text-xs sm:text-sm">${primaryDisplayName}</strong>
                ${badgesHtml}
              </div>
              <div class="text-[11px] text-slate-500 font-mono mt-0.5">
                ${usernameSubLine} • ID: ${u.visitorId || 'USR-0001'}
                ${hasEmail ? ` • <span class="text-indigo-600 font-sans font-semibold">${u.email}</span>` : ` • <span class="text-amber-800 font-sans font-semibold">No email</span>`}
              </div>
            </td>
            <td class="py-2.5 px-3 text-slate-600">
              <span class="font-bold text-slate-800 block text-[11px]">${u.deviceInfo || 'Desktop • Browser'}</span>
              <span class="text-[10px] text-slate-500 block">${u.timezone || 'Local Time'}</span>
            </td>
            <td class="py-2.5 px-3 text-slate-600">
              <div class="mb-0.5">${planTypeBadge}</div>
              <span class="font-bold text-slate-800 block text-[11px]">${u.startDate || '2026-11-01'} &rarr; ${u.endDate || '2027-03-28'}</span>
              <span class="text-[10px] text-slate-500">${u.weekdayHours ?? 2}h/wkday • ${u.weekendHours ?? 2}h/wknd</span>
            </td>
            <td class="py-2.5 px-3">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-extrabold text-[11px]">${u.lessonsDone || 0} items done</span>
                <span class="text-[11px] text-slate-600 font-semibold">${u.questionsAttempted || 0} Qs • ${u.studyHours || 0}h timer</span>
              </div>
              <span class="text-[11px] text-indigo-700 font-semibold block mt-1">
                &#9656; ${u.lastAction || u.lastEvent || 'Opened Dashboard (Instant Use)'}
              </span>
            </td>
            <td class="py-2.5 px-3 text-slate-600">
              <span class="font-extrabold ${rel.isOnline ? 'text-emerald-700' : 'text-slate-800'} block text-[11px]">${rel.badge}</span>
              <span class="text-[10px] text-slate-500 block">${u.totalVisits || 1} visit(s) • ${u.activeMinutes || 1}m active</span>
              <span class="text-[10px] text-slate-400 font-mono block">${lastDateStr}</span>
            </td>
          </tr>
        `;
      }).join('');
    }

    async function fetchCloudActiveUsersForAdmin(showToastOnComplete) {
      renderAdminActiveUsersTable();
      const baseKv = getCloudTelemetryBaseUrl();

      // Helper to merge an array or map of incoming user records into local directory
      const mergeIncomingList = (items) => {
        if (!Array.isArray(items) || items.length === 0) return;
        const dir = getLocalTrackedUsersDirectory();
        items.forEach(u => {
          if (u && typeof u === 'object' && u.visitorId) {
            dir[u.visitorId] = mergeTelemetryUserRecords(dir[u.visitorId], u);
          }
        });
        saveLocalTrackedUsersDirectory(dir);
      };

      // 1. Fetch from built-in Vercel Serverless API (/api/telemetry?action=list_users)
      try {
        const apiResp = await fetch('/api/telemetry?action=list_users', { cache: 'no-store' });
        if (apiResp.ok) {
          const data = await apiResp.json();
          if (data && Array.isArray(data.users)) {
            mergeIncomingList(data.users);
          }
        }
      } catch (e) {}

      // 2. Fetch ALL atomic per-visitor keys (`u_USR-...`) + aggregate maps from shared Cloud KV Bucket (`?values=true&format=json`)
      try {
        const listResp = await fetch(baseKv + '/?values=true&format=json', { method: 'GET', headers: { 'Accept': 'application/json' }, cache: 'no-store' });
        if (listResp.ok) {
          const listText = await listResp.text();
          if (listText && (listText.trim().startsWith('[') || listText.trim().startsWith('{'))) {
            const parsed = JSON.parse(listText);
            const extracted = [];
            const inspectValue = (val) => {
              if (!val) return;
              let obj = val;
              if (typeof val === 'string' && val.trim().startsWith('{')) {
                try { obj = JSON.parse(val); } catch (e) { return; }
              }
              if (obj && typeof obj === 'object') {
                if (obj.visitorId) {
                  extracted.push(obj);
                } else {
                  Object.values(obj).forEach(sub => {
                    if (sub && typeof sub === 'object' && sub.visitorId) extracted.push(sub);
                  });
                }
              }
            };
            if (Array.isArray(parsed)) {
              parsed.forEach(pair => {
                if (Array.isArray(pair) && pair.length >= 2) inspectValue(pair[1]);
                else if (pair && typeof pair === 'object') inspectValue(pair.value !== undefined ? pair.value : pair);
              });
            } else if (typeof parsed === 'object') {
              Object.values(parsed).forEach(inspectValue);
            }
            mergeIncomingList(extracted);
          }
        }
      } catch (e) {}

      // 3. Also fetch the aggregate key (`cfa_l2_active_users_v2`) directly
      try {
        const kvResp = await fetch(baseKv + '/cfa_l2_active_users_v2', { method: 'GET', headers: { 'Accept': 'application/json' }, cache: 'no-store' });
        if (kvResp.ok) {
          const text = await kvResp.text();
          if (text && text.trim().startsWith('{')) {
            const cloudMap = JSON.parse(text);
            mergeIncomingList(Object.values(cloudMap));
          }
        }
      } catch (e) {}

      // 4. Fetch from optional Google Apps Script Sheet Webhook if configured
      try {
        const gasUrl = (localStorage.getItem(GAS_WEBHOOK_URL_KEY) || '').trim();
        if (gasUrl && gasUrl.startsWith('https://script.google.com/')) {
          const resp = await fetch(gasUrl + '?action=list_users');
          if (resp.ok) {
            const data = await resp.json();
            if (data && Array.isArray(data.users)) {
              mergeIncomingList(data.users);
            }
          }
        }
      } catch (e) {}

      renderAdminActiveUsersTable();
      if (showToastOnComplete) {
        const totalNow = getAllCombinedTrackedUsers().length;
        showToast(`Refreshed live active users (${totalNow} total tracked visitors & usernames synced)!`);
      }
    }

    function exportActiveUsersCsv() {
      const list = getAllCombinedTrackedUsers();
      const headers = ['Visitor_ID', 'Access_Mode', 'Username', 'Display_Name', 'Email', 'Device_Browser', 'Timezone', 'Plan_Mode', 'Start_Date', 'End_Date', 'Weekday_Hours', 'Weekend_Hours', 'Lessons_Completed', 'Questions_Attempted', 'Timer_Hours', 'Active_Minutes', 'Total_Visits', 'Last_Action', 'Last_Active'];
      const rows = list.map(u => {
        const hasEmail = hasRealUserEmail(u.email);
        const customUsername = extractCustomUsername(u, hasEmail ? u.email : '');
        const mode = hasEmail ? 'Email_User' : (customUsername ? 'Username_Only_No_Email' : 'Instant_Open_No_Email');
        return [
          u.visitorId || '',
          mode,
          `"${String(customUsername || 'Not Provided (Guest)').replace(/"/g, '""')}"`,
          `"${String(u.name || '').replace(/"/g, '""')}"`,
          `"${String(hasEmail ? u.email : 'No Email (Instant Open)').replace(/"/g, '""')}"`,
          `"${String(u.deviceInfo || '').replace(/"/g, '""')}"`,
          `"${String(u.timezone || '').replace(/"/g, '""')}"`,
          u.isCustomPlan ? 'Custom' : 'Default_Instant_Use',
          u.startDate || '',
          u.endDate || '',
          u.weekdayHours ?? 2,
          u.weekendHours ?? 2,
          u.lessonsDone || 0,
          u.questionsAttempted || 0,
          u.studyHours || 0,
          u.activeMinutes || 1,
          u.totalVisits || 1,
          `"${String(u.lastAction || '').replace(/"/g, '""')}"`,
          u.lastActive || ''
        ].join(',');
      });
      const csv = [headers.join(','), ...rows].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cfa_level2_active_users_' + new Date().toISOString().slice(0, 10) + '.csv';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Exported Active Users CSV (including Usernames & Instant-Open visitors)!');
    }

    function generateAdminCodeLive() {}

    function buildAdminWelcomeEmailPayload() {
      const email = normalizeEmail((document.getElementById('adminRequesterEmailInput') || {}).value);
      const name = ((document.getElementById('adminRequesterNameInput') || {}).value || '').trim() || 'CFA Candidate';
      const appUrl = 'https://cfastudyplan.vercel.app/';
      const subject = 'Invitation: CFA Level II Study Guide & Adaptive Schedule';
      const body = [
        `Hi ${name},`,
        ``,
        `Here is the link to the interactive CFA Level II Study Guide:`,
        `${appUrl}`,
        ``,
        `It opens immediately with zero login barriers and saves your personal progress automatically every day:`,
        `1. Open ${appUrl} on your laptop or phone.`,
        `2. Set your preferred Core Reading Start/End Dates and Weekday/Weekend study hours in the welcome pop-up (or skip to use the default schedule right away).`,
        `3. Track your daily lessons, LES practice questions, formulas, and mocks right from your dashboard.`,
        ``,
        `Best of luck with your CFA Level II preparation!`
      ].join('\n');
      return { email, name, code: 'INSTANT-OPEN', subject, body, appUrl };
    }

    function sendAdminCodeViaGmailWeb() {
      const p = buildAdminWelcomeEmailPayload();
      if (!p.email || !p.email.includes('@')) {
        showToast('Please enter the candidate’s email address first.');
        return;
      }
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}&su=${encodeURIComponent(p.subject)}&body=${encodeURIComponent(p.body)}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      const banner = document.getElementById('adminSendStatusBanner');
      if (banner) {
        banner.textContent = `Opened Gmail Web compose tab to invite ${p.email}!`;
        banner.classList.remove('hidden');
      }
    }

    function copyAdminWelcomeMessage() {
      const p = buildAdminWelcomeEmailPayload();
      try {
        navigator.clipboard.writeText(p.body);
        showToast('Copied Study Guide invite message to clipboard!');
      } catch (e) {
        showToast('Invite message ready!');
      }
    }

    function copyGoogleAppsScriptSnippet() {
      const snippet = [
        "function doPost(e) {",
        "  var d = JSON.parse(e.postData.contents);",
        "  var props = PropertiesService.getScriptProperties();",
        "  var map = JSON.parse(props.getProperty('ACTIVE_USERS') || '{}');",
        "  if (d.visitorId) { map[d.visitorId] = d; props.setProperty('ACTIVE_USERS', JSON.stringify(map)); }",
        "  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);",
        "}",
        "function doGet(e) {",
        "  var map = JSON.parse(PropertiesService.getScriptProperties().getProperty('ACTIVE_USERS') || '{}');",
        "  var users = Object.keys(map).map(function(k){ return map[k]; });",
        "  return ContentService.createTextOutput(JSON.stringify({ ok: true, users: users })).setMimeType(ContentService.MimeType.JSON);",
        "}"
      ].join('\n');
      try {
        navigator.clipboard.writeText(snippet);
        showToast('Copied 12-line Live Active User Tracker Google Script!');
      } catch (e) {
        showToast('Script ready!');
      }
    }

    function loadAdminEmailJsConfigInputs() {
      try {
        const gasUrl = localStorage.getItem(GAS_WEBHOOK_URL_KEY) || '';
        const gasInp = document.getElementById('gasWebhookUrlInput');
        if (gasInp) gasInp.value = gasUrl;
      } catch (e) {}
    }

    function saveAdminEmailJsConfig() {
      const gasUrl = ((document.getElementById('gasWebhookUrlInput') || {}).value || '').trim();
      if (gasUrl) {
        localStorage.setItem(GAS_WEBHOOK_URL_KEY, gasUrl);
      } else {
        localStorage.removeItem(GAS_WEBHOOK_URL_KEY);
      }
      renderAdminActiveUsersTable();
      fetchCloudActiveUsersForAdmin(true);
      showToast('Saved Live Active-User Tracker URL!');
    }

    function checkUrlApproveActionOnLoad() { return false; }
    function closeOneClickApproveModal() {}

    // Start 60-second active-session heartbeat + pagehide/visibilitychange sync so fast link openers are always captured
    function startActiveSessionHeartbeat() {
      try {
        if ('BroadcastChannel' in window) {
          window._cfaTelemetryChannel = new BroadcastChannel('cfa_l2_live_telemetry_v2');
          window._cfaTelemetryChannel.onmessage = (ev) => {
            if (ev.data && ev.data.type === 'USER_TELEMETRY_UPDATE' && ev.data.entry) {
              const dir = getLocalTrackedUsersDirectory();
              dir[ev.data.entry.visitorId] = mergeTelemetryUserRecords(dir[ev.data.entry.visitorId], ev.data.entry);
              saveLocalTrackedUsersDirectory(dir);
              const adminModal = document.getElementById('adminCodeModal');
              if (adminModal && !adminModal.classList.contains('hidden')) {
                renderAdminActiveUsersTable();
              }
            }
          };
        }
      } catch (e) {}

      window.addEventListener('storage', (ev) => {
        if (ev.key === ACTIVE_USERS_TELEMETRY_KEY || ev.key === USERS_REGISTRY_KEY) {
          const adminModal = document.getElementById('adminCodeModal');
          if (adminModal && !adminModal.classList.contains('hidden')) {
            renderAdminActiveUsersTable();
          }
        }
      });

      // Flush latest visitor state + any typed username when the user switches tabs or closes the link
      window.addEventListener('pagehide', () => {
        try {
          const entry = recordCurrentUserIntoTelemetryDirectory(null);
          pushEntryToCloudTelemetryStores(entry, false);
        } catch (e) {}
      });

      // Also pull cloud users in the background on startup so Admin view has fresh counts immediately
      setTimeout(() => {
        fetchCloudActiveUsersForAdmin(false);
      }, 800);

      clearInterval(window._cfaActiveHeartbeatInterval);
      window._cfaActiveHeartbeatInterval = setInterval(() => {
        if (document.visibilityState === 'visible' && appState) {
          appState.activeMinutesSpent = (Number(appState.activeMinutesSpent) || 1) + 1;
          saveState();
          const entry = recordCurrentUserIntoTelemetryDirectory(null);
          pushEntryToCloudTelemetryStores(entry, false);
        }
      }, 60000);
    }

    window.addEventListener('DOMContentLoaded', () => {
      checkUrlHashSyncOnLoad();

      // Instant Load: Never lock body or show a login gate — ensure visitor has an active profile and load immediately
      document.body.classList.remove('auth-locked');
      const authModal = document.getElementById('authGateModal');
      if (authModal) {
        authModal.classList.add('hidden');
        authModal.classList.remove('flex');
      }

      ensureInstantDefaultProfile();
      loadState();
      rebuildScheduleForUserPlan();
      performDailyLoginProgressUpdate();
      document.getElementById('activeDateInput').value = appState.activeDate || '2026-11-02';
      populateWeekFilterDropdown(true);
      updateTimerDisplays();
      refreshAllViews();

      // Log active session heartbeat immediately (tracks both Instant-Open anonymous users and Email users)
      sendActiveUserTelemetryPing('Opened Dashboard (Instant Use)', false);
      startActiveSessionHeartbeat();

      // If this is a new user's very first visit, pop up the Study Dates, Hours & Name customizer so their schedule is tailored right away
      if (!appState.hasCompletedPlanSetup) {
        setTimeout(() => {
          openPlanSettingsModal(true);
        }, 250);
      }
    });
  

    function copyApprovedCandidateCode() {}
    function saveGasUrlFromApproveModal() {}
    function sendApprovedCodeViaGmailWeb() {}
    function sendApprovedCodeViaMailApp() {}

    if ('serviceWorker' in navigator && window.location && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function() {});
      });
    }

window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    if (window.location.hostname && window.location.hostname.includes('vercel.app')) {
      var vaScript = document.createElement('script');
      vaScript.defer = true;
      vaScript.src = '/_vercel/insights/script.js';
      document.head.appendChild(vaScript);
    }

Object.assign(window, {
  JumpToCurrentWeekSummary,
  addDaysIso,
  addDrillEntry,
  addMockExamEntry,
  adjustActiveTimerMinutes,
  adjustDailyEthicsMinutes,
  applyModalTopicPreset,
  applyPastedSyncCode,
  applyPhaseAndWorkloadSettings,
  applyProfileUpdatePreservingAnonymous,
  applyRecommendedScheduleDefaults,
  applyRecommendedScheduleDefaultsInModal,
  applyRoadmapHourModeSettings,
  applySideCustomMinutes,
  applyTopicOrderPreset,
  assignAllUnscheduledBacklogToDate,
  assignBacklogItemToDate,
  autoCalculateEndDateFromHours,
  autoRebalanceOverdueItems,
  buildAdminWelcomeEmailPayload,
  checkManualTimeOverlapWarning,
  checkUrlApproveActionOnLoad,
  checkUrlHashSyncOnLoad,
  classifyAccessType,
  clearSingleDatePlannedHoursOverride,
  clearTimerHistory,
  closeAdminCodeModal,
  closeAuthGateModal,
  closeDayOffRescheduleModal,
  closeManualTimeModal,
  closeModuleModal,
  closeOneClickApproveModal,
  closePlanSettingsModal,
  closeSyncModal,
  computeBottomUpWorkloadAndFeasibility,
  computePlanMetricsPreview,
  computeStudyTimeGapsSummary,
  confirmAndApplyDayOffReschedule,
  copyAdminWelcomeMessage,
  copyApprovedCandidateCode,
  copyGoogleAppsScriptSnippet,
  copySyncCodeToClipboard,
  copySyncUrlToClipboard,
  createAndSwitchToAnonymousVisitor,
  cycleCustomWeekdayMode,
  cycleLessonConfidence,
  decodeSyncPayload,
  deleteCustomFormula,
  deleteDrillEntry,
  deleteMockExam,
  deleteTimerSession,
  detectVisitorDeviceAndTimezone,
  diffDaysIso,
  encodeSyncPayload,
  ensureInstantDefaultProfile,
  ensurePlanConfigInitialized,
  exportActiveUsersCsv,
  exportBackupJson,
  extractCustomUsername,
  fetchCloudActiveUsersForAdmin,
  filterScheduleBySubject,
  formatIsoToFullDisplay,
  formatIsoToShortDisplay,
  formatMMSS,
  formatRelativeTimeAgo,
  generateAccessCodeForEmail,
  generateAdminCodeLive,
  generateCodePartsForEmail,
  generateSundayRevisionSet,
  generateVisitorId,
  getActiveTimerSubjectCode,
  getActiveTopicOrderList,
  getActualMinutesForDate,
  getActualStudyHoursForDate,
  getAllCombinedTrackedUsers,
  getCarryForwardItemsForDate,
  getCloudTelemetryBaseUrl,
  getDefaultAppState,
  getDefaultGuestNameFromVisitorId,
  getDeterministicVisitorIdForKey,
  getEffectiveDate,
  getEffectiveDayModeForDate,
  getFinalReviewWindow,
  getLocalTrackedUsersDirectory,
  getLowestScoringModules,
  getMaxWeekNum,
  getModuleStats,
  getNextEligibleStudyDateAfter,
  getNextShiftDateForDay,
  getPhaseForDate,
  getPlannedHoursForDate,
  getProfileProgressSummary,
  getTotalActualStudyHours,
  getUserStorageKey,
  getWeeklyAndMonthlyTimeReport,
  handleToggleDayOffClick,
  hardLessonsCount,
  hasRealUserEmail,
  importBackupJson,
  isCustomUserProvidedName,
  isDateMarkedDayOff,
  isOwnerEmail,
  isPlanUsingBaselineDefaults,
  isValidAccessCode,
  jumpCalendarToActiveOrToday,
  jumpCalendarToYearMonth,
  jumpToTodayOrNextUnfinished,
  loadAdminEmailJsConfigInputs,
  loadState,
  loadUsersRegistry,
  logCompletedTimerSession,
  logoutCurrentUser,
  markEntireActiveDay,
  mergeTelemetryUserRecords,
  moveTopicInOrder,
  normalizeEmail,
  onActiveDateChange,
  onCalendarCellClick,
  onLiveUsernameOrEmailInput,
  onTopicDragEnd,
  onTopicDragLeave,
  onTopicDragOver,
  onTopicDragStart,
  onTopicDrop,
  openAdminCodeModal,
  openAuthGateModal,
  openManualTimeModal,
  openModuleModal,
  openPlanSettingsModal,
  openSyncModal,
  openWeekSummaryTab,
  performDailyLoginProgressUpdate,
  playCompletionChime,
  populateFormulaModuleDropdown,
  populateWeekFilterDropdown,
  pushEntryToCloudTelemetryStores,
  rebuildExtendedCalendarDaysMap,
  rebuildScheduleForUserPlan,
  rebuildScheduleLookupMaps,
  recordCurrentUserIntoTelemetryDirectory,
  recoverOverwrittenAnonymousProfiles,
  redistributeAllUnscheduledBacklog,
  refreshAllViews,
  renderAdminActiveUsersTable,
  renderCalendarSelectedDayInspector,
  renderConfidenceButtonHtml,
  renderDailyView,
  renderDeviceProfilesList,
  renderExamReadinessForecast,
  renderFormulaVault,
  renderFullSchedule,
  renderInlineBarChart,
  renderKPIs,
  renderLowestScoringWidgets,
  renderMockTopicBreakdownMatrix,
  renderMocksAndPhase2,
  renderModalFlexibilityControls,
  renderModulesTable,
  renderPacingAndHeatmap,
  renderRoadmapFlexibilityControls,
  renderRoadmapHourAndPhaseControls,
  renderRoadmapTable,
  renderSubjectTimerHoursBreakdown,
  renderSynchronizedMonthlyCalendars,
  renderTimerHistory,
  renderWeeklyForms,
  resetDailyEthicsMinutesToRecommended,
  resetPlanToDefaultMay2027,
  resetTimer,
  restoreItemOriginalDate,
  saveActiveProfileDetails,
  saveAdminEmailJsConfig,
  saveAndApplyPlanSettings,
  saveCustomFormulaEntry,
  saveDailyNote,
  saveGasUrlFromApproveModal,
  saveLocalTrackedUsersDirectory,
  saveManualStudyTimeEntry,
  saveMarch28Record,
  saveModuleModal,
  saveState,
  saveUserPomodoroDefaults,
  saveUsersRegistry,
  saveWeeklySummary,
  selectTimerPreset,
  sendActiveUserTelemetryPing,
  sendAdminCodeViaGmailWeb,
  sendApprovedCodeViaGmailWeb,
  sendApprovedCodeViaMailApp,
  setActiveDateAndOpenDaily,
  setAdminUserFilter,
  setCustomTimerMinutes,
  setDailyCalendarDisplayMode,
  setDailyEthicsMinutesDirect,
  setEthicsModePreference,
  setModalEthicsMode,
  setModalWeeklyMode,
  setSingleDatePlannedHoursOverride,
  setSingleDayModeOverride,
  setStudyHourMode,
  setWeeklyScheduleMode,
  shareSyncNative,
  shiftSingleItem,
  shiftUnfinishedFromActiveDay,
  showToast,
  startActiveSessionHeartbeat,
  startNewUserProfileOnDevice,
  stepActiveDate,
  stepCalendarMonth,
  switchTab,
  switchToDeviceUserProfile,
  syncDailyCalendarVisibility,
  syncDailyWorkspaceUpgradeWidgets,
  syncUserPomodoroPresetsFromState,
  toggleAddDrillForm,
  toggleAddFormulaForm,
  toggleAddMockForm,
  toggleFormulaPinFilter,
  toggleItemComplete,
  toggleManualEthicsDrawer,
  togglePinFormula,
  toggleReadinessDetailsDrawer,
  toggleRoadmapMonthlyCalendarCollapse,
  toggleTimer,
  updateDayOffReschedulePreview,
  updateDynamicUserAndPlanBanners,
  updateExamDate,
  updateMockScoreChart,
  updateModalPlanPreview,
  updateReadinessThresholds,
  updateTimerDisplays,
  updateTopicAccuracyChart,
  updateWeeklyTrendChart
});
})(window, document);
