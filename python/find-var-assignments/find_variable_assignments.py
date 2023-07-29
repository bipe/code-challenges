import ast

#The step-by-step code explanation is written in the "Your notes" section

def extract_variable_names(node):
    if isinstance(node, ast.Name):
        return [node.id]

    elif isinstance(node, ast.Tuple):
        return [elt.id for elt in node.elts if isinstance(elt, ast.Name)]

    return []

def traverse_class(node):
    assigned_vars = set()

    for class_node in ast.walk(node):
        if isinstance(class_node, ast.FunctionDef):
            assigned_vars.update(traverse_definitions(class_node))

    return assigned_vars


def traverse_definitions(node):
    assigned_vars = set()

    for inner_node in ast.walk(node):
        if isinstance(inner_node, ast.Assign):
            for target in inner_node.targets:
                assigned_vars.update(extract_variable_names(target))

        elif isinstance(inner_node, ast.arguments):
            for arg in inner_node.args:
                assigned_vars.add(arg.arg)

    return assigned_vars


def find_variable_assignments(source, target_var_names):
    tree = ast.parse(source)

    assigned_vars = set()

    for node in ast.walk(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                assigned_vars.update(extract_variable_names(target))

        elif isinstance(node, ast.FunctionDef):
            assigned_vars.add(node.name)
            assigned_vars.update(traverse_definitions(node))

        elif isinstance(node, ast.ClassDef):
            assigned_vars.add(node.name)
            assigned_vars.update(traverse_class(node))

    assigned_vars = [var for var in assigned_vars if var in target_var_names]

    assigned_vars = [var for var in assigned_vars if var not in dir(__builtins__)]

    return assigned_vars