export type Revision = {
	id: number;
	data: Record<string, any> | null;
	delta: Record<string, any> | null;
	collection: string;
	item: string | number;
	activity: {
		action: string;
		ip: string;
		user_agent: string;
		origin: string;
		timestamp: string;
		user:
			| string
			| {
					id: string;
					email: string;
					first_name: string;
					last_name: string;
			  };
	};
};

export type RevisionWithTime = Revision & {
	timestampFormatted: string;
	timeRelative: string;
};

export type RevisionsByDate = {
	date: Date;
	dateFormatted: string;
	revisions: RevisionWithTime[];
};
