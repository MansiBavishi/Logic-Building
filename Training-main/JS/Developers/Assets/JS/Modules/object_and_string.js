class extensions
{
    constructor()
    {
        this.objectClass = new extensions.object.ext;
        this._objectClass = new extensions.object.ext.level;
        this.stringClass = new extensions.strings;
    }
    
    static object = class
    {
        static ext = class
        {
            objectExtension()
            {
                return "Yayyyyyy, inside a nested Object class ext method";
            }

            static level = class
            {
                objectExtensions()
                {
                    return "Yayyyyyy, inside a nested Object class level method";
                }
            }
        }
    }

    static strings = class
    {
        stringExtensions()
        {
            return "Yayyyyyy, inside a nested String class";
        }
    }
}

export { extensions };