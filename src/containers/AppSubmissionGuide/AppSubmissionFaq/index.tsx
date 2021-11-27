import React, {FC} from 'react';

import {Divider, Note, NoteType} from 'components';

import ProjectReviewers from './ProjectReviewers.png';
import * as S from './styles';

const AppSubmissionFaq: FC = () => {
  return (
    <S.Container>
      <S.Title>Frequently Asked Questions</S.Title>
      <S.FaqDropdownCard
        answer={
          <p className="ProjectRulesFaq__answer">
            All members of thenewboston community, including core team members and Governors, can submit project
            proposals.
          </p>
        }
        question="Who can submit project proposals?"
      />
      <S.FaqDropdownCard
        answer={
          <>
            <p className="ProjectRulesFaq__answer">
              To ensure that core team members and Government do not work on projects for which they have{' '}
              <i>decision-making power</i>, we follow separate guidelines. Here is an outline of these processes.
            </p>
            <img
              alt="Project Proposal Reviewers Diagram"
              className="ProjectRulesFaq__illustration"
              src={ProjectReviewers}
            />
            <ul className="ProjectRulesFaq__answer-items">
              <li className="ProjectRulesFaq__answer-item">
                <b className="ProjectRulesFaq__answer-item-title">Proposals coming from community members</b> - Auditors
                review such proposals and they will make coin offers for milestones. If the decision of the auditor
                conflicts with the proposal maker (project lead), they can appeal to the Government for help. Auditors
                can invite the Government or core team members to join the auditor’s project review meeting if the
                proposal’s review requires subject expertise.
              </li>
              <Divider className="ProjectRulesFaq__inner-divider" />
              <li className="ProjectRulesFaq__answer-item">
                <b className="ProjectRulesFaq__answer-item-title">Proposals coming from core team members</b> - Core
                team (excluding auditors) can make proposals the same way as community members, and auditors review
                these proposals. Auditors, however, can’t involve the core team member who made the proposal in decision
                making. They can only ask questions for clarification.
              </li>
              <Divider className="ProjectRulesFaq__inner-divider" />
              <li className="ProjectRulesFaq__answer-item">
                <b className="ProjectRulesFaq__answer-item-title">Proposals coming from auditors</b> - Only the
                Government can review project or milestone proposals made by auditors. Government can invite people from
                the core team with particular subject expertise to look at proposals, however, they cannot include any
                of the auditors in that review session.
              </li>
              <Divider className="ProjectRulesFaq__inner-divider" />
              <li className="ProjectRulesFaq__answer-item">
                <b className="ProjectRulesFaq__answer-item-title">Proposals coming from a member of the Government</b> -
                Project proposals made by a Government member are open for everyone in the community to review. Core
                team members, auditors, Governors, and Community members all have the same weight in decision making
                about these proposals. Although decision-making will be open for everyone, auditors take conclusions and
                move the proposal accordingly.
              </li>
            </ul>
          </>
        }
        question="Who reviews project proposals?"
      />
      <S.FaqDropdownCard
        answer={
          <p className="ProjectRulesFaq__answer">
            Auditors can offer an amount of coins for proposals. The project lead (proposal maker) and auditors can
            negotiate the number of coins for a proposal. In case of conflict between auditors and project leads, either
            party can take the issue to the Government. The decision of the Government will be final.
          </p>
        }
        question="Who offers coins for proposals?"
      />
      <S.FaqDropdownCard
        answer={
          <p className="ProjectRulesFaq__answer">
            Auditors must take biweekly reports from project leads regarding the progress of their project. Also,
            auditors will generate bi-weekly reports on all approved projects/milestones.These project progress reports
            will be presented to the Government in a biweekly sprint planning meeting.
          </p>
        }
        question="How will I report progress on my project?"
      />
      <S.FaqDropdownCard
        answer={
          <div className="ProjectRulesFaq__answer">
            The criteria for project inactivity are:
            <br />
            <br />
            <ul className="ProjectRulesFaq__answer-items">
              <li className="ProjectRulesFaq__answer-item">
                No reply from project leads (two consecutive times) when the auditor asks their biweekly project
                progress-related questions
              </li>
              <li className="ProjectRulesFaq__answer-item">Crossed milestone deadline</li>
              <li className="ProjectRulesFaq__answer-item">
                No recent updates to their projects GitHub in the last 30 days
              </li>
            </ul>
          </div>
        }
        question="When does thenewboston team consider a project as “inactive”?"
      />
      <S.FaqDropdownCard
        answer={
          <>
            <p className="ProjectRulesFaq__answer">
              Once thenewboston team identifies a project as inactive, the project will be open for anyone to take over
              it and will have the “inactive” label. If another community member claims an “inactive” project, auditors
              will decide whether to give them the lead for the project based on their GitHub profile and their
              community reputation.
            </p>
            <Note
              text="The core team, including auditors and Government, can also take over inactive projects."
              type={NoteType.Information}
            />
          </>
        }
        question="What happens to inactive projects?"
      />
      <S.FaqDropdownCard
        answer={
          <>
            <ol className="ProjectRulesFaq__answer-items">
              <li className="ProjectRulesFaq__answer-item">Look for any project proposal with the “inactive” label.</li>
              <li className="ProjectRulesFaq__answer-item">
                Comment down that you are interested in taking over the proposal, and why would thenewboston team choose
                you.
              </li>
              <li className="ProjectRulesFaq__answer-item">
                If auditors appoint you as the new leader of the project, fork the previous project from their
                repository.
              </li>
              <li className="ProjectRulesFaq__answer-item">Make a new milestone proposal.</li>
              <li className="ProjectRulesFaq__answer-item">
                Start working on milestones and make payout requests when the milestone is complete.
              </li>
              <br />
            </ol>
            <Note
              text="You can’t receive payment for redoing work that we already paid for to the previous project lead. So, it’s better to start from where the previous project lead left the project by forking their repo."
              type={NoteType.Important}
            />
          </>
        }
        question="How to take over inactive projects?"
      />
    </S.Container>
  );
};

export default AppSubmissionFaq;
