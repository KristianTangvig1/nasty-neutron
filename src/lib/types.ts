export type Campaign = 'det-okay' | 'diy' | 'brave-together';

export interface EventItem {
	id:          number;
	title:       string;
	beskrivelse: string;
	day:         string;
	time:        string;
	location:    string;
	campaign:    Campaign;
}
