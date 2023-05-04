import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import org.json.simple.JSONArray;

public class ArraySplit {
    public static final int SPLIT_SIZE = 3;

    public static void main(String[] args) throws IOException {

        // check if any files
        if (args.length == 0) {
            System.out.println("Please provide at least one filename as an argument.");
            return;
        }

        // loop through files
        for (String filename : args) {
            File file = new File(filename);

            // check if file exists, otherwise move to next file in list
            if (!file.exists()) {
                System.out.println("File " + filename + " does not exist.");
                continue;
            }

            // read file
            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    // System.out.println("Input read: " + line);
                    // JSONArray jsonArray = new JSONArray(line);
                    // System.out.println(JSONArray.toString(jsonArray));
                    
                    String[] arrayToSplit = line.substring(1, input.length()-1).split(",\\s*"); // remove beginning and end brackets
                    splitArray(arrayToSplit, SPLIT_SIZE);
                }
            } catch (IOException e) {
                System.out.println("Error reading file " + filename + ": " + e.getMessage());
            }
        }
    }

    public static void splitArray(String[] array, int splitSize) {
        if (array.length < 1 || splitSize <= 0) return;

        for (int i=0; i<array.length; i+=splitSize) {
            int lastIndexOfChunkInArray = i+splitSize > array.length ? array.length : i+splitSize;
            System.out.println(Arrays.toString(Arrays.copyOfRange(array, i, lastIndexOfChunkInArray)));
        }

    }


}