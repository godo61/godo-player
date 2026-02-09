import { Track, Album } from './types';

// Images extracted from the provided HTML to ensure visual fidelity
export const IMAGES = {
    midnightCityVideo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhR7p1QPDBNIb8rDT3V5qWgJuOSKIWdJcowJYb5qfwgJ3GKC8vYkVsSOekVM7w0BVITF3U1aT1LTqcbYa07UJGICUaj0j0zD_UUk9Bs5IO8iZYMmQio5-LbbwZmMsg9yi-gr8ZIVxOrF7lMoQpTpA3BvPC-psDzJpDAm9AN8U4au8tRce9hurTWcEOrpc7Rsm52bdSv205gWqE7AyXHmA759sUNmF1INqL_97dsIJG7t1di_ycOz3dpHcZxioaHCPHD6aOtKXfj0ap",
    starboy: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKYNOkhWyqDR0eulpM8xzSvFdYiv7hLzHGhjPs3mpZBAz2SAFYjvP5PWMdbwrY_ySvqMXwgVOHVD8fSzgA7WLuOHUwxrWk0Qwe8niKKCkBYkb2MSET1wMxMwGgRN7iz2z1tJa_sjoB5WecumZ1zskM2Kn1mORPTU5lMRnrA7Tl9mgP__tSieguDSr_RHzeN4-aov9vr1DOECfmyewfqk4BFAKpbl0CscIQZsVEUHI53KVZXdmJ5NTHmXOxiwzo6PUJsJADj18IDA5_",
    futureNostalgia: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqbrzH___VtbvP8VBDhp6kTalr6af1l7zvyWrbwqcXU9PaBJ18370J9_5D48sDKTJsKtbvhyClkNZSpBwex4Z5yEv88g7eSkZlPGAOTkW_39QPsVxpv1FxpPr18y2di79-KN_V7CS9vp5JAQ1vHxhir-2OrvxAMt5qVImE9M33WPywNBsGs5dTquP7IAoa6MxJtLclTjxwTUGPqEra3GMAzI6MS3EV3ogJOZabfL9xO7RfqAeZnam1kvqQK3zgTRIX25aoe-Dr3X5g",
    afterHours: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAPtXdfoHs0I5uSpvZqYbcGcxQETl25dSwnLUwyg-g9KagN31WvJ6Ti1ejtbdDmXUkR5IpnLuQNuMKdpjtTWg2ZMJqcYaoGw854FfjRqtYz0cdJeDoKRDHp5aeqX_94kvMpSlWpey63MlAZzTVQ0d17HAvtWPVr6P1zcHyNxZOAQnYy6dhbzLtJXTvr_DGdCiIaHpXJQSHoZhuW4dKT2rVhJ6llEufkJgMNSIRsVC7epPM0tchc_9QySPYyvQHs_rCOwsVoA15tc02",
    divide: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1DkjxvF3oOqUw69RcklbT9RyTz6_rFVvTWJkWb0wNsS9edow9OhrghxyfD0N5YhpFR7Op0cI5gHPltyS9JL6pzZWh-7DFt2_XRfOo-D_uAuJWX0t9kSoE3mvk-oS-EpnCDGJB5NUvBPGbs6zADzoVdGs2K31ofXkvWHto63ml4H9ToVf0JMi_iO2gB_tLs-eTyoWuKgE8v_PBuyoyqAsRG66NEsXLgNk3HhoTC3GUzsn5Bt6jp6sEXy9D6MDc20o1M8ZX7Tc4ycug",
    midnightCityThumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuAON5Q_vmVzInk6wusxBhwddv5y3IytcQLYYmuf6E9bzE2lKzOsrlEdcX23NC0q1oC1MaXcXXzg9LknkkFm6G9NJrpxjsaIxf-hCO7Kp2kXMDIApoV9SOPjo0xyjl4Br_alI36YunGz6V751MzIRX-2s3jyhVOZKHbS3Vwy_ifgVlvtjF7G9qruAlOzYg8jv_keXmVYSdjfCkL9qWLSx6EAQ2kp9e2YHuD0gqqmRHG_Tq6MTTRMGTMKCzTxvcoVaATCyEOCqggYKdZh",
    profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgj9LX9w94bj4pWp7Fd1sgMrzYLDlVn8BIZhuwhkhpF2Zm85DvfL438CmIEu6HxZfhukt3LnU5YvJLVX7Jkbyd8aHj54oP77Ct54qPRr4I4_BOqFrWqU9va3JkKvfUWsCWGjhxZ0rhcPdS2WbRhW0rb6tjDFutrFX0jPwPtB4A1xbMkTaXz4g-BKT6cVl_vOJxhLU6Y07JM9ZqRoUfovKLhpdaR_XWCs2RI1CyeiHwi22KDEHaBVQ5uwVa6jBw2RkOfu_yCIYES7HW"
};

export const ALBUMS: Album[] = [
    { id: 1, title: 'Starboy', artist: 'The Weeknd', coverUrl: IMAGES.starboy },
    { id: 2, title: 'Future Nostalgia', artist: 'Dua Lipa', coverUrl: IMAGES.futureNostalgia },
    { id: 3, title: 'After Hours', artist: 'The Weeknd', coverUrl: IMAGES.afterHours },
    { id: 4, title: 'Divide', artist: 'Ed Sheeran', coverUrl: IMAGES.divide },
    { id: 5, title: 'Random Access Memories', artist: 'Daft Punk', coverUrl: IMAGES.midnightCityVideo }, // Reusing for demo
];

export const TRACKS: Track[] = [
    { id: '1', title: 'Midnight City', artist: 'M83', album: "Hurry Up, We're Dreaming", duration: '4:03', coverUrl: IMAGES.midnightCityThumb, fileUrl: '' },
    { id: '2', title: 'Starboy', artist: 'The Weeknd', album: 'Starboy', duration: '3:50', coverUrl: IMAGES.starboy, fileUrl: '' },
    { id: '3', title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', coverUrl: IMAGES.futureNostalgia, fileUrl: '' },
    { id: '4', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', coverUrl: IMAGES.afterHours, fileUrl: '' },
    { id: '5', title: 'Shape of You', artist: 'Ed Sheeran', album: '÷ (Divide)', duration: '3:53', coverUrl: IMAGES.divide, fileUrl: '' },
    { id: '6', title: 'I Feel It Coming', artist: 'The Weeknd', album: 'Starboy', duration: '4:29', coverUrl: IMAGES.starboy, fileUrl: '' },
    { id: '7', title: 'Don\'t Start Now', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:03', coverUrl: IMAGES.futureNostalgia, fileUrl: '' },
];
