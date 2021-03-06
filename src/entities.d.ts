export namespace entities {

    export enum EntityType {
        Event = 0,
        Market = 1,
        League = 2,
        Sport = 3,
        Region = 4
    }
    
    export type EventType = "Fixture" | "Outright"    
    
    export interface Event {
        id: string
        /** Type of SportEvent. */
        type: EventType
        /** Type of Entity. */
        entityType: EntityType.Event
	/** Name of event, for league events */
        eventName?: string
        /** Sport ID. */
        sportId: string        
        /** Sport name (translated). */
        sportName: string
        /** Region ID. */
        regionId: string
        /** ISO country code or (for regions in country) region code. */
        regionCode: string
        /** Region name (translated). */
        regionName: string
        /** League ID. */
        leagueId: string
        /** League name (translated). */
        leagueName: string        
        /** Is it marked as TOP league. */
        isTopLeague: boolean        
        /** participants in the event. */
        participants: Participant[]        
        markets: Market[]
        /** date/time of game start */
        startEventDate: Date
        /**  Status of game */
        status: GameStatus
        /**  Score in game*/
        score: GameScore
        /** is it live game */
        isLive: boolean
        /** will this game go live when started, for pre-live only and eventType = Game */
        isGoingLive: boolean
        liveGameState?: LiveGameState                
        metadata: Dictionary<any>
        tags: string[] 
        /** Is event suspended for some reason */
        isSuspended: boolean       
    }
    
    export interface Participant {
        id: string
	name: string
	venueRole?: VenueRole
	country: string     // ISO code
	metadata: Dictionary<any> // runnerNumber: number, imageUrl: string, weight: string, age: number, form: string
    }
	
    export type VenueRole = "Home" | "Away"
    
    export interface Market {
        id: string
        entityType: EntityType.Market
        marketType: MarketType
        eventId: string
        sportId: string
        leagueId: string
        /** date/time of game start */
        startDate: Date
        title?: string
        participantMapping?: number
        selections: Selection[]               
        isLive: boolean
        liveData: LiveData
        groupId: number
        groupName: string
        liveGroupId: number
        preLiveGroupId: number                
        metadata: Dictionary<any>
	tags: string[]
    }
    
    export interface MarketType {
        id: string
        name: string        
        swapTeams: boolean
    }
    
    export interface Sport {
        /** sport ID */
        id: string
        entityType: EntityType.Sport
        /** sorting order */
        order: number
        /** translated sport name */
        name: string
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number        
    }
    
    export interface Region {
        /** region ID */
        id: string
        entityType: EntityType.Region
        /** ISO country code or (for regions in country) region code */
        code: string
        /** translated region name */
        name: string
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number                
    }
    
    export interface League {
        /** league ID */
        id: string
        entityType: EntityType.League
        /** translated league name */
        name: string
        /** link to sport */
        sportId: string
        /** link to region */
        regionId: string
	/** ISO country code or (for regions in country) region code */
        regionCode: string
        /** Sorting order */
        order: number
        /** Is league in TOP for specific region. */
        istopLeague: boolean        
        /** number of live (in-game) active fixtures */
        liveFixturesCount: number
        /** total number of fixtures, both live and pre-live */
        fixturesCount: number
        /** number of active outrights league bound markets */
        outrightsCount: number        
    }
    
    export interface Selection {
        id: string
        side?: SelectionSide
        type?: SelectionType
        group: number
        name: string
        title?: string
        displayOdds: Dictionary<string>
        trueOdds: number
        points: number
        /* idsbtech: string */
        metadata: Dictionary<any>
    }
    
    export enum SelectionSide {
        Home = 1,
        Draw = 2,
        Away = 3
    }
    
    export enum SelectionType {
        ML = 1,
        HC = 2,
        OU = 3,
        Column1 = 13,
        Column2 = 14,
        Column3 = 15
    }
    
    export enum LiveStatus {
        NotStarted = 0,
        FirstHalf = 1,
        PausedFirstHalf = -1,
        SecondHalf = 2,
        PausedSecondHalf = -2,
        EndFirstHalf = 3,
        PauseBetweenHalfs = -3,
        Finished = 6,
        Overtime = 9,
        FirstPart = 11,
        SecondPart = 12,
        ThirdPart = 13,
        FourthPart = 14,
        FifthPart = 15,
        SixthPart = 16,
        SeventhPart = 17,
        EighthPart = 18,
        NinthPart = 19,
        TenthPart = 20,
        EleventhPart = 21,
        TwelfthPart = 22,
        ThirteenthPart = 23,
        FourteenthPart = 24,
        FifteenthPart = 25,
        SixteenthPart = 26,
        SeventeenthPart = 27,
        EighteenthPart = 28,
        NineteenthPart = 29,
        TwentiethPart = 30,
        FirstBreak = 31,
        SecondBreak = 32,
        ThirdBreak = 33,
        FourthBreak = 34,
        FifthBreak = 35,
        SixthBreak = 36,
        SeventhBreak = 37,
        EighthBreak = 38,
        NinthBreak = 39,
        TenthBreak = 40,
        EleventhBreak = 41,
        TwelfthBreak = 42,
        ThirteenthBreak = 43,
        FourteenthBreak = 44,
        FifteenthBreak = 45,
        SixteenthBreak = 46,
        SeventeenthBreak = 47,
        EighteenthBreak = 48,
        NineteenthBreak = 49,
        EndGame = 50,
        Started = 51,
        PausedFirstPart = -11,
        PausedSecondPart = -12,
        PausedThirdPart = -13,
        PausedFourthPart = -14
    }
    
    export interface GameScore {
        /** Home team/player top level score */
        homeScore: number
        /** Away team/player top level score */
        awayScore: number
        additionalScores: Dictionary<string>
    }
    
    export interface LiveGameState {
        clockRunning: boolean
        gameTime: number
        gamePart: string
    }    

    export interface LiveData {        
        scoreHome: number
        scoreAway: number
        isSuspended: boolean        
    }
}

export interface Dictionary<T> {
    [index:string]: T
}

export enum GameStatus {
    NotStarted = 0,
    InProgress = 1
}
