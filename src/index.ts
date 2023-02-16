import alfred, {OutputItem} from "@alfred-workflows/core";
import iterm from "@mac-applications/iterm"

const preferences = iterm.getPreferencesSync();
const items: OutputItem[] = preferences['New Bookmarks'].map(i => ({
    title: i.Name,
    subtitle: i.Tags.join(','),
    arg: i.Name,
    text: {
        copy: i.Command.split('@')[1]
    }
}));
alfred.output({
    items
}, ["title", "subtitle"]);
