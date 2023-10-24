<script>
    import { messagesCSS } from "./stores";

    //@ts-ignore

    let hiddenChecked = false;
    let content = "Hello World!";

    const userOptions = {
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'black',
        padding: {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        }
    }

    $: cssStyleString = `
        --background: ${userOptions.backgroundColor};
        --color: ${userOptions.color};
        --size: ${userOptions.fontSize}px;
        --font: ${userOptions.fontFamily};
        --pt: ${userOptions.padding.top}rem;
        --pb: ${userOptions.padding.bottom}rem;
        `;
    // storeを使ってMessageDisplayでも反映されるようにする
</script>

<div>

    <fieldset>
        <legend>Options</legend>
        <!-- HANDSON TASK 1: `bind:`でcssOptionsとつなげ直す  -->
        <label>
            Background Color:
            <input type="color" />
        </label>
        <label>
            Text Color:
            <input type="color" />
        </label>
        <label>
            Font Size: {userOptions.fontSize} px
            <input type="range" step=1 min=16 max=28  />
        </label>
        <label>
            Hide Preview: 
            <input type="checkbox" />
        </label>
        <label>
            Content: 
            <input type="text" />
        </label>
        <div style="display:flex; flex-direction: column; align-items: flex-start;">
            <label>
                Padding Top: {userOptions.padding.top} rem
                <input type="range" step=1 min=0 max=5  />
            </label>
            <label>
                Padding Bottom: {userOptions.padding.bottom} rem
                <input type="range" step=1 min=0 max=5  />
            </label>
        </div>
        <div style="display:flex; flex-direction: column; align-items: flex-start;">
            <label for="fontArial">Arial
                <input id="fontArial" type="radio" name="fontInput" value="Arial" 
                        />
            </label>
            <label for="fontTimes">Times New Roman
                <input id="fontTimes" type="radio" name="fontInput" value="Times New Roman" 
                        />
            </label>
            <label for="fontCourier">Courier New
                <input id="fontCourier" type="radio" name="fontInput" value="Courier New" 
                        />
            </label>
            <label for="comicSans">Comic Sans MS
                <input id="comicSans" type="radio" name="fontInput" value="Comic Sans MS" 
                        />
            </label>
        </div>
    </fieldset>

    <!-- HANDSON　TASK １: スタイルをつなげ直す -->
    <div id="preview" 
        class:hidden={hiddenChecked} 
        class="{hiddenChecked ? 'hidden' : ''}"
        style="--background:white;"
    >
        
        {content}

    </div>
</div>


<style>
    :global(:root){
        --background: white;
        --color: black;
        --size: 16px;
        --font: Arial;
        --pt: 1rem;
        --pb: 1rem;
    }

    div.hidden {
        display: none;
    }

    fieldset {
        margin: 1rem 0;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    #preview {
        background-color: var(--background);
        font-size: var(--size);
        font-family: var(--font);
        color: var(--color);
        padding-top: var(--pt);
        padding-bottom: var(--pb);
        margin-bottom: 1rem;
    }
</style>