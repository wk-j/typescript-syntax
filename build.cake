Task("Clean").Does(() => {
    Action<string> clear = (pattern) => {
        var files = new System.IO.DirectoryInfo("./src")
            .GetFiles(pattern, System.IO.SearchOption.AllDirectories)
            .ToList();

        files.ForEach(file => {
            Console.WriteLine($"Delete - {file.FullName}");
            file.Delete();
        });
    };
    clear("*.js");
    clear("*.map");
});

Task("Build-Readme").Does(() => {
    var links = new List<string>();
    
    var files = new System.IO.DirectoryInfo("./src")
        .GetFiles("*.ts", System.IO.SearchOption.AllDirectories)
        .GroupBy(x => x.Directory.FullName)
        .Select(x => x.FirstOrDefault())
        .ToList();

    var currentDir = System.IO.Directory.GetCurrentDirectory();

    files.ForEach(file => {
        Console.WriteLine(file.FullName);
        var text = System.IO.File.ReadAllText("template/readme.template");
        var source = System.IO.File.ReadAllText(file.FullName);
        var name = file.Name;
        var newText = text
            .Replace("{{fileName}}", name)
            .Replace("{{source}}", source);

        var mdFile = System.IO.Path.Combine(file.Directory.FullName, "README.md");
        System.IO.File.WriteAllText(mdFile, newText);

        var dirName = file.Directory.Name;
        var relative = file.Directory.FullName.Replace(currentDir, "").TrimStart('/');

        var link = $"- [{dirName}]({relative})";
        links.Add(link);
    });

    var mainTemplate = System.IO.File.ReadAllText("template/main.template");
    var mainText = mainTemplate.Replace("{{links}}", String.Join("\n", links));
    System.IO.File.WriteAllText("README.md", mainText);
});

var target = Argument("target", "default");
RunTarget(target);