import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage } from 'langchain';

const API_CLAUDE = process.env.API_CLAUDE

const model = new ChatAnthropic({
    model: 'claude-sonnet-4-6',
    apiKey: API_CLAUDE
});

const messaggiaClaude = messaggio => {
    return model.invoke([
        new HumanMessage(messaggio)
    ])
}

export { messaggiaClaude }