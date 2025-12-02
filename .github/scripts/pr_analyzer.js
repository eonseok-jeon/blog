import OpenAI from 'openai';
import { octokit } from '@octokit/core';

async function main() {
  const client = new OpenAI();

  // 1. PR 변경 내역 가져오기
  const pr = await octokit.rest.pulls.get({
    owner,
    repo,
    pull_number: prNumber,
    mediaType: {
      format: 'diff',
    },
  });

  const diffContent = pr.data;

  if (!diffContent) {
    core.info('No diff found.');
    return;
  }

  // 2. GPT로 분석 요청
  const response = await client.responses.create({
    model: 'gpt-5',
    input: 'Write a one-sentence bedtime story about a unicorn.',
  });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a code review assistant. Analyze this code diff and provide a summary, potential issues, and suggestions for improvement.',
      },
      {
        role: 'user',
        content: `Analyze this pull request diff:\n\n${diffContent}`,
      },
    ],
  });

  const analysis = response.output_text;

  // 3. PR에 코멘트 생성
  const commentBody = `## 🤖 PR Analysis by GPT\n\n${analysis}`;
  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: commentBody,
  });
}

main().catch((error) => {
  core.setFailed(error.message);
});
