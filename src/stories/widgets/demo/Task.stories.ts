import { Task } from '$components/widgets/demo/index.js';
import { action } from '@storybook/addon-actions';

export const actionsData = {
	onPinTask: action('onPinTask'),
	onArchiveTask: action('onArchiveTask')
};

export default {
	component: Task,
	title: 'Task',
	excludeStories: /.*Data$/,
	//👇 The argTypes are included so that they are properly displayed in the Actions Panel
	argTypes: {
		onPinTask: { action: 'onPinTask' },
		onArchiveTask: { action: 'onArchiveTask' }
	}
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
	Component: Task,
	props: args,
	on: {
		...actionsData
	}
});

export const Default = Template.bind({});
Default.args = {
	task: {
		id: '1',
		title: 'Test Task',
		state: 'TASK_INBOX'
	}
};
export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: 'TASK_PINNED'
	}
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: 'TASK_ARCHIVED'
	}
};
